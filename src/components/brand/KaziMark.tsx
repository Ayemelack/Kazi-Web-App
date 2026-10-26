import React from 'react';

interface Props {
  size?: number;
  className?: string;
}

/**
 * Official Kazi App Brand Mark
 * Faithful 1:1 reproduction of KaziMark.tsx from Kazi mobile application:
 * - Green squircle base (#007A5E, rx=18)
 * - Three white horizontal bars with decreasing opacities
 * - Amber dot accent (#E8A33D)
 */
export const KaziMark: React.FC<Props> = ({ size = 48, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="60" height="60" rx="18" fill="#007A5E" />
      <rect x="18" y="44" width="26" height="7" rx="3.5" fill="#FFFFFF" />
      <rect x="22" y="34" width="22" height="7" rx="3.5" fill="#FFFFFF" opacity="0.92" />
      <rect x="26" y="24" width="18" height="7" rx="3.5" fill="#FFFFFF" opacity="0.84" />
      <circle cx="46" cy="20" r="3.5" fill="#E8A33D" />
    </svg>
  );
};

export default KaziMark;
