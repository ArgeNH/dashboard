import React, { FC } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const variantStyles: {
  [key in NonNullable<ButtonProps['variant']>]: string[];
} = {
  primary: ['bg-primary-700', 'text-white', 'hover:bg-primary-900'],
  secondary: ['bg-secondary-200', 'text-black', 'hover:bg-secondary-300'],
};

export const Button: FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  const buttonClasses = [
    'inline-flex',
    'gap-2',
    'justify-center',
    'items-center',
    'rounded-md',
    'p-3',
    ...(variantStyles[variant as NonNullable<ButtonProps['variant']>] || []),
  ].join(' ');

  return (
    <button className={buttonClasses} {...props}>
      {props.children}
    </button>
  );
};
