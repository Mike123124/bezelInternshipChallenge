/* eslint-disable prettier/prettier */
import React, { ReactNode } from 'react';

interface PlainLayoutProps {
  children: ReactNode;
}

function PlainLayout({ children }: PlainLayoutProps) {
  return (
    <div className="flex min-h-screen  flex-col items-center justify-center bg-[#333232] py-2">
      {children}
    </div>
  );
}

export default PlainLayout;
