/* eslint-disable prettier/prettier */
import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-[20px] bg-[#1a3a32] px-28 py-4 font-sans text-sm font-semibold text-[#e1e3df]"
    >
      {children}
    </button>
  );
}

export default Button;
