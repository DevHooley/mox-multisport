'use client';

import React from 'react';

export default function Footer() {
  const handleDialClick = () => {
    window.location.href = 'tel:+13124669111';
  };

  return (
    <footer className="bg-sky-300 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="flex-shrink-0">
            <a
              className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-xl font-bold whitespace-nowrap"
              onClick={handleDialClick}
            >
              Phone number - (312) 466-9111
            </a>
          </div>
          <div>
            <a className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-xl">
              Address - 648 W Randolph St, Chicago, IL 60661
            </a>
          </div>
          <div className="space-x-4">
            <NavLink href="/">Home</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Custom NavLink component for consistent styling
import { ReactNode } from 'react';

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="hover:text-gray-800">
      {children}
    </a>
  );
}
