import React, { useRef, useState, useEffect } from 'react';
import { Play, Clock, Volume2, VolumeX, RotateCcw, CheckCircle2 } from 'lucide-react';
import './LivePreview.css';

interface Chapter {
  label: string;
  time: string;
  seconds: number;
}

const DEMO_VIDEO_URL =
  'https://cdn.jsdelivr.net/gh/Ayemelack/Kazi-Web-App@845a1b0/public/assets/kazi-live-demo-v3.mp4';
const DEMO_POSTER_URL =
  'https://cdn.jsdelivr.net/gh/Ayemelack/Kazi-Web-App@845a1b0/public/assets/kazi-live-demo-v3-poster.jpg';
const DEMO_VOICE_URL = '/assets/kazi-female-voice-narration.mp3';

const CHAPTERS: Chapter[] = [
  { label: 'Welcome & setup', time: '0:00', seconds: 0 },
  { label: 'Home dashboard', time: '0:23', seconds: 23 },
  { label: 'Products & stock', time: '0:37', seconds: 37 },
  { label: 'Record a sale', time: '1:02', seconds: 62 },
  { label: 'Spending & debts', time: '1:25', seconds: 85 },
  { label: 'History & wrap-up', time: '2:07', seconds: 127 },
];

export const LivePreview: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isVoiceEnabled, setIsVoiceEnabled] = useState<boolean>(true);
  const [isVoicePlaying, setIsVoicePlaying] = useState<boolean>(false);
  const isVoiceEnabledRef = useRef<boolean>(true);

  // Keep ref synchronized with state for event listeners
  useEffect(() => {
    isVoiceEnabledRef.current = isVoiceEnabled;
  }, [isVoiceEnabled]);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video || !audio) return;

    const handleVideoPlay = () => {
      if (isVoiceEnabledRef.current) {
        const audioMaxDuration = audio.duration || 162.0;
        if (video.currentTime < audioMaxDuration) {
          audio.currentTime = video.currentTime;
          audio.play().catch(() => {
            // Autoplay policies may catch when not directly user-initiated
          });
        }
      }
    };

    const handleVideoPause = () => {
      audio.pause();
    };

    const handleVideoSeeking = () => {
      if (isVoiceEnabledRef.current) {
        const audioMaxDuration = audio.duration || 162.0;
        if (video.currentTime < audioMaxDuration) {
          audio.currentTime = video.currentTime;
        } else {
          audio.pause();
        }
      }
    };

    const handleVideoSeeked = () => {
      if (isVoiceEnabledRef.current) {
        const audioMaxDuration = audio.duration || 162.0;
        if (video.currentTime < audioMaxDuration) {
          audio.currentTime = video.currentTime;
          if (!video.paused) {
            audio.play().catch(() => {});
          }
        } else {
          audio.pause();
        }
      }
    };

    const handleVideoEnded = () => {
      audio.pause();
      audio.currentTime = 0;
    };

    // Keep audio in close sync with video; if drift > 0.4s, align
    const handleTimeUpdate = () => {
      if (isVoiceEnabledRef.current && !video.paused && !audio.paused && audio.duration) {
        if (video.currentTime < audio.duration) {
          if (Math.abs(video.currentTime - audio.currentTime) > 0.4) {
            audio.currentTime = video.currentTime;
          }
        } else {
          audio.pause();
        }
      }
    };

    const handleAudioPlay = () => setIsVoicePlaying(true);
    const handleAudioPause = () => setIsVoicePlaying(false);
    const handleAudioEnded = () => setIsVoicePlaying(false);

    // Stop audio narration cleanly when user tabs away or leaves page
    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      }
    };

    video.addEventListener('play', handleVideoPlay);
    video.addEventListener('pause', handleVideoPause);
    video.addEventListener('seeking', handleVideoSeeking);
    video.addEventListener('seeked', handleVideoSeeked);
    video.addEventListener('ended', handleVideoEnded);
    video.addEventListener('timeupdate', handleTimeUpdate);

    audio.addEventListener('play', handleAudioPlay);
    audio.addEventListener('pause', handleAudioPause);
    audio.addEventListener('ended', handleAudioEnded);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      video.removeEventListener('play', handleVideoPlay);
      video.removeEventListener('pause', handleVideoPause);
      video.removeEventListener('seeking', handleVideoSeeking);
      video.removeEventListener('seeked', handleVideoSeeked);
      video.removeEventListener('ended', handleVideoEnded);
      video.removeEventListener('timeupdate', handleTimeUpdate);

      audio.removeEventListener('play', handleAudioPlay);
      audio.removeEventListener('pause', handleAudioPause);
      audio.removeEventListener('ended', handleAudioEnded);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const toggleVoice = () => {
    const audio = audioRef.current;
    const video = videoRef.current;
    if (!audio || !video) return;

    if (isVoiceEnabled) {
      // Turn voice off
      setIsVoiceEnabled(false);
      audio.pause();
    } else {
      // Turn voice on
      setIsVoiceEnabled(true);
      const audioMaxDuration = audio.duration || 162.0;
      if (video.currentTime < audioMaxDuration) {
        audio.currentTime = video.currentTime;
        audio.play().catch(() => {});
        if (video.paused) {
          video.play().catch(() => {});
        }
      } else {
        // If past voice duration, restart both from 0 for clear experience
        audio.currentTime = 0;
        video.currentTime = 0;
        audio.play().catch(() => {});
        video.play().catch(() => {});
      }
    }
  };

  const replayVoice = () => {
    const audio = audioRef.current;
    const video = videoRef.current;
    if (!audio || !video) return;

    setIsVoiceEnabled(true);
    audio.currentTime = 0;
    video.currentTime = 0;
    audio.play().catch(() => {});
    video.play().catch(() => {});
  };

  const seekTo = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;

    const playFrom = () => {
      try {
        video.currentTime = seconds;
      } catch {
        return;
      }

      void video.play().catch(() => {
        // Browsers may block playback until the user interacts with the native controls.
      });
    };

    if (video.readyState >= 1) {
      playFrom();
      return;
    }

    video.addEventListener('loadedmetadata', playFrom, { once: true });
    video.load();
  };

  return (
    <section className="live-preview-section" id="live-preview">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-primary section-tag">Live Preview</span>
          <h2>See Kazi in Action</h2>
          <p>
            Watch a guided tour of the Kazi app flow, from the welcome screen to recording a sale,
            tracking spending, and remembering customer debts.
          </p>
        </div>

        <div className="live-preview-layout">
          <div className="live-preview-player">
            <div className="live-preview-frame">
              <video
                ref={videoRef}
                className="live-preview-video"
                controls
                playsInline
                preload="none"
                poster={DEMO_POSTER_URL}
                aria-label="Kazi live preview: a two minute forty-two second guided tour of the Kazi mobile app"
              >
                <source src={DEMO_VIDEO_URL} type="video/mp4" />
                Your browser does not support the video tag.{' '}
                <a href={DEMO_VIDEO_URL}>Download the Kazi demo video</a>.
              </video>

              {/* Dedicated synchronized audio layer */}
              <audio
                ref={audioRef}
                src={DEMO_VOICE_URL}
                preload="auto"
                aria-hidden="true"
              />

              <div className="live-preview-overlay" aria-hidden="true">
                <span className="live-preview-pill">
                  <Clock size={13} aria-hidden="true" />
                  2:42
                </span>
                <span className={`live-preview-pill ${isVoiceEnabled && isVoicePlaying ? 'live-preview-pill-active' : ''}`}>
                  {isVoiceEnabled ? (
                    <>
                      <Volume2 size={13} aria-hidden="true" />
                      {isVoicePlaying ? 'AI Voice Speaking' : 'AI Voice Ready'}
                    </>
                  ) : (
                    <>
                      <VolumeX size={13} aria-hidden="true" />
                      Voice Muted
                    </>
                  )}
                </span>
              </div>
            </div>

            <div className="live-preview-meta">
              <div className="live-preview-meta-stats">
                <span>
                  <Clock size={14} aria-hidden="true" />
                  2 min 42 sec
                </span>
                <span className="live-preview-voice-status">
                  {isVoiceEnabled && isVoicePlaying ? (
                    <>
                      <Volume2 size={14} className="live-preview-voice-active-icon" aria-hidden="true" />
                      Calm female AI voice playing
                    </>
                  ) : isVoiceEnabled ? (
                    <>
                      <Volume2 size={14} aria-hidden="true" />
                      Calm female AI voice ready
                    </>
                  ) : (
                    <>
                      <VolumeX size={14} aria-hidden="true" />
                      Narration muted
                    </>
                  )}
                </span>
                <span>On-screen captions</span>
              </div>

              {/* Minimal narration playback controls */}
              <div className="live-preview-voice-controls" role="group" aria-label="Audio narration controls">
                <button
                  type="button"
                  className={`live-preview-voice-btn ${isVoiceEnabled ? 'is-active' : ''}`}
                  onClick={toggleVoice}
                  aria-pressed={isVoiceEnabled}
                  title={isVoiceEnabled ? 'Mute AI voice narration' : 'Play AI voice narration'}
                >
                  {isVoiceEnabled ? (
                    <>
                      <Volume2 size={14} aria-hidden="true" />
                      <span>{isVoicePlaying ? 'Pause Voice' : 'Voice Enabled'}</span>
                    </>
                  ) : (
                    <>
                      <VolumeX size={14} aria-hidden="true" />
                      <span>Play Voice</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  className="live-preview-voice-btn live-preview-voice-btn-replay"
                  onClick={replayVoice}
                  title="Replay female AI voice narration from the beginning"
                  aria-label="Replay female AI voice narration from the beginning"
                >
                  <RotateCcw size={13} aria-hidden="true" />
                  <span>Replay Voice</span>
                </button>
              </div>
            </div>
          </div>

          <aside className="live-preview-chapters" aria-label="Video chapters">
            <div className="live-preview-chapters-head">
              <h3>Chapters</h3>
              <span>Jump to a step</span>
            </div>

            <div className="live-preview-chapter-list">
              {CHAPTERS.map((chapter, index) => (
                <button
                  key={chapter.label}
                  type="button"
                  className="live-preview-chapter"
                  onClick={() => seekTo(chapter.seconds)}
                  aria-label={`Play chapter ${index + 1}: ${chapter.label} at ${chapter.time}`}
                >
                  <span className="live-preview-chapter-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="live-preview-chapter-label">{chapter.label}</span>
                  <span className="live-preview-chapter-time" aria-hidden="true">
                    {chapter.time}
                  </span>
                  <span className="live-preview-chapter-play" aria-hidden="true">
                    <Play size={13} fill="currentColor" />
                  </span>
                </button>
              ))}
            </div>

            <div className="live-preview-note">
              <CheckCircle2 size={16} aria-hidden="true" />
              <p>
                The welcome screen in this demo is the genuine Kazi mobile asset. The rest of the tour
                follows the real app flow and labels.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default LivePreview;
