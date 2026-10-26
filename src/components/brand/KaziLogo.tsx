import React from 'react';
import KaziMark from './KaziMark';

interface Props {
  markSize?: number;
  textSize?: number | string;
  className?: string;
  showTagline?: boolean;
}

/**
 * Official Kazi App Full Logo (Mark + Wordmark)
 * Strictly conforms to KaziLogo.tsx from the mobile app
 */
export const KaziLogo: React.FC<Props> = ({
  markSize = 36,
  textSize = '1.35rem',
  className = '',
  showTagline = false,
}) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
        userSelect: 'none',
      }}
      className={className}
    >
      <KaziMark size={markSize} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            fontSize: typeof textSize === 'number' ? `${textSize}px` : textSize,
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
          }}
        >
          Kazi
        </span>
        {showTagline && (
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              color: 'var(--color-text-secondary)',
              fontWeight: 500,
              letterSpacing: '0.01em',
            }}
          >
            Your business, kept simple.
          </span>
        )}
      </div>
    </div>
  );
};

export default KaziLogo;
