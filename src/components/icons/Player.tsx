import type { FC } from 'react';

export const PlayerSvg: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    transform="rotate(90)"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9" />
    <path d="M7.5 15h9L12 7z" />
  </svg>
);
