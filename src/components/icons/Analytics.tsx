import type { FC } from 'react';

export const AnalyticsSvg: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
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
    <path d="M3 3v18h18m-1-3v3m-4-5v5m-4-8v8m-4-5v5" />
    <path d="M3 11c6 0 5-5 9-5s3 5 9 5" />
  </svg>
);
