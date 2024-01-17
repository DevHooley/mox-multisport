'use client';

import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const menuItems = [
  {
    label: 'Test',
    href: '/cervelo',
  },
  {
    label: 'Cervelo',
    href: '/Cervelo',
  },
  {
    label: 'Pinarello',
    href: '/Pinarello',
  },
  {
    label: 'Canndondale',
    href: '/Canndondale',
  },
  {
    label: 'Triathlon',
    href: '/triathlon',
  },
  {
    label: 'Custom Builds',
    href: '/CustomBuilds',
  },
];

export default function RoadBikes() {
  return (
    <>
      <Menu as="div" className="relative ml-3 ">
        <div>
          <Menu.Button className="relative flex   h-14 items-center text-xl md:text-2xl lg:text-2xl font-medium px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <button className="">Road Bikes</button>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Canndondale
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Cervelo
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Pinarello
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
      ;
    </>
  );
}
