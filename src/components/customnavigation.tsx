// components/Navigation.js

'use client';
import React from 'react';
import Dropdown from '@/components/dropdown';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function CustomNavigation() {
  const navigationOptions = [
    { label: 'Home', path: '/' },
    {
      label: 'Road Bikes',
      path: '/roadbikes',
      dropdownOptions: ['Option 1', 'Option 2', 'Option 3'],
    },
    { label: 'Triathlon', path: '/triathlon' },
    { label: 'Custom Builds', path: '/custombuilds' },
  ];

  const handleOptionSelect = (selectedOption) => {
    // Implement your logic when an option is selected
    console.log(`Selected option: ${selectedOption}`);
  };

  return (
    <Disclosure as="nav" className="py-0.5">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl shadow-sm bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 ">
              <div className="flex overflow-x-auto">
                <div className="hidden  p-1 shadow-sm sm:flex md:space-x-8 lg:space-x-8">
                  {navigationOptions.map((option) => (
                    <div key={option.label}>
                      {option.dropdownOptions ? (
                        <Dropdown
                          options={option.dropdownOptions}
                          onSelect={handleOptionSelect}
                        >
                          <a
                            href={option.path}
                            className="inline-flex items-center text-xl md:text-2xl lg:text-2xl font-medium px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap"
                          >
                            {option.label}
                          </a>
                        </Dropdown>
                      ) : (
                        <a
                          href={option.path}
                          className="inline-flex items-center text-xl md:text-2xl lg:text-2xl font-medium px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap"
                        >
                          {option.label}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {/* Your existing code for the desktop menu */}
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Your existing code for the mobile menu */}
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 bg-gray-50 pb-3 pt-2">
              {/* Your existing code for the mobile menu items */}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              {/* Your existing code for the additional mobile menu items */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
