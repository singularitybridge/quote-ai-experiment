import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    type="button"
    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white bg-purple-600  "
    onClick={onClick}
  >
    {label}
  </button>
);

export { Button };
