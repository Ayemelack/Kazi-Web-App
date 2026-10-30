import React, { useRef } from 'react';
import { Play, Clock, VolumeX, CheckCircle2 } from 'lucide-react';
import './LivePreview.css';

interface Chapter {
  label: string;
  time: string;
  seconds: number;
}

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
                poster="/assets/kazi-live-demo-poster.jpg"
                aria-label="Kazi live preview: a two minute forty-two second guided tour of the Kazi mobile app"
              >
                <source src="/assets/kazi-live-demo-v2.mp4" type="video/mp4" />
                Your browser does not support the video tag.{' '}
                <a href="/assets/kazi-live-demo-v2.mp4">Download the Kazi demo video</a>.
              </video>

              <div className="live-preview-overlay" aria-hidden="true">
                <span className="live-preview-pill">
                  <Clock size={13} aria-hidden="true" />
                  2:42
                </span>
                <span className="live-preview-pill">
                  <VolumeX size={13} aria-hidden="true" />
                  Silent
                </span>
              </div>
            </div>

            <div className="live-preview-meta">
              <span>
                <Clock size={14} aria-hidden="true" />
                2 min 42 sec
              </span>
              <span>
                <VolumeX size={14} aria-hidden="true" />
                Silent guided demo
              </span>
              <span>On-screen captions</span>
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
