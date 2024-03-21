import type { FC } from 'react';

import './progress.css';
import { PlanType } from '../../../../types';

type ProgressProps = Omit<PlanType, 'id'>;

export const Progress: FC<ProgressProps> = ({ value, label, capacity }) => {
  return (
    <article className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h5 className="text-sm">{label}</h5>
        <p className="text-[0.65em] font-light">{capacity}</p>
      </div>
      <progress
        className="w-full h-2 appearance-none bg-gray-200 rounded-lg overflow-hidden "
        value={value}
        max={100}
      ></progress>
    </article>
  );
};
