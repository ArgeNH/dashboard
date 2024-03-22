import type { FC } from 'react';

export const CheckBox: FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props,
) => {
  return (
    <input
      type="checkbox"
      className="appearance-none w-4 h-4 border-2 border-secondary-300 p-[2px] rounded-sm bg-clip-content checked:bg-primary-700 cursor-pointer"
      {...props}
    />
  );
};
