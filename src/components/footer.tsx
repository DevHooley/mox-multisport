import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-sky-300 text-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <h1 className="text-black sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl">
              Phone number - (312)466-9111
            </h1>
          </div>
          <div className="space-x-4">
            <a href="/home" className="hover:text-gray-800">
              Home
            </a>
            <a href="#" className="hover:text-gray-800">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-800">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
