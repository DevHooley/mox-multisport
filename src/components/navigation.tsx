'use client';

import Image from 'next/image';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import Dropdown from './dropdown/dropdown';

// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Buttons = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'All Bikes',
    href: '/bikes',
  },
  {
    label: 'Cervelo',
    href: '/cervelo',
  },
  {
    label: 'Cannondale',
    href: 'cannondale',
  },
  {
    label: 'Pinarello',
    href: 'pinarello',
  },
  {
    label: 'Triathlon',
    href: '/triathlon',
  },
  {
    label: 'Custom Builds',
    href: '/custombuilds/cervelo',
  },
];

export default function Navigation() {
  return (
    <Disclosure as="nav" className="py-0.5">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl shadow-sm bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 ">
              <div className="flex overflow-x-auto">
                <div className="hidden  p-1 shadow-sm sm:flex md:space-x-8 lg:space-x-8">
                  <Dropdown />
                  {/* {Buttons.map((button) => (
                      <a
                        key={button.href}
                        href={button.href}
                        className="inline-flex items-center text-xl md:text-2xl lg:text-2xl font-medium px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap"
                      >
                        {button.label}
                      </a>
                    ))} */}

                  {/* OLD UP OLD DOWN */}

                  {/* <a
                    href="/"
                    className="inline-flex items-center text-xl md:text-2xl lg:text-2xl font-medium px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap"
                  >
                    Home
                  </a>
                  <a
                    href="/cervelo"
                    className="inline-flex items-center text-xl md:text-2xl lg:text-2xl font-medium px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap"
                  >
                    Cervelo
                  </a>

                  <a
                    href="pinarello"
                    className="inline-flex items-center text-xl md:text-2xl lg:text-2xl font-medium px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap"
                  >
                    Pinarello
                  </a>

                  <a
                    href="/triathlon"
                    className="inline-flex items-center text-xl md:text-2xl lg:text-2xl font-medium px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap"
                  >
                    Triathlon
                  </a>

                  <a
                    href="/custombuilds"
                    className="inline-flex items-center text-xl md:text-2xl lg:text-2xl font-medium px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap"
                  >
                    Custom Builds
                  </a> */}

                  {/* <a
                    href="/"
                    className="inline-flex items-center text-xl md:text-2xl lg:text-2xl font-medium px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap"
                  >
                    Home
                  </a>
                  <a
                    href="/Cervelo"
                    className="inline-flex items-center text-xl md:text-2xl lg:text-2xl font-medium px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap"
                  >
                    Road Bikes
                  </a>
                  <a
                    href="/Cervelo"
                    className="inline-flex items-center text-xl md:text-2xl lg:text-2xl font-medium px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap"
                  >
                    Road Bikes
                  </a>

                  <a
                    href="/triathlon"
                    className="inline-flex items-center text-xl md:text-2xl lg:text-2xl font-medium px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap"
                  >
                    Triathlon
                  </a>
                  <a
                    href="/custombuilds"
                    className="inline-flex items-center text-xl md:text-2xl lg:text-2xl font-medium px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap"
                  >
                    Custom Builds
                  </a> */}
                  {/* <Menu>
                    <Menu.Button className="">
                      {Brand.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="px-4 py-2 text-xl md:text-2xl lg:text-2xl  hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap focus:outline-none"
                        >
                          {item.label}
                        </a>
                      ))}
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {links.map((link) => (
                        <Menu.Item
                          as="a"
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {link.label}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Menu> */}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Menu as="div" className="relative ml-3">
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  ></Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 bg-gray-50 pb-3 pt-2">
              {Buttons.map((button) => (
                <a
                  key={button.href}
                  href={button.href}
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-pink-500 hover:bg-pink-50 hover:text-pink-500
                active:bg-sky-50 active:border-sky-300 active:text-sky-700"
                >
                  {button.label}
                </a>
              ))}
              {/* <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-pink-500 hover:bg-pink-50 hover:text-pink-500
                active:bg-sky-50 active:border-sky-300 active:text-sky-700"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="roadbikes"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-pink-500 hover:bg-pink-50 hover:text-pink-500
                active:bg-sky-50 active:border-sky-300 active:text-sky-700"
              >
                Road Bikes
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/triathlon"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-pink-500 hover:bg-pink-50 hover:text-pink-500
                active:bg-sky-50 active:border-sky-300 active:text-sky-700"
              >
                Triathlon
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/custombuilds"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-pink-500 hover:bg-pink-50 hover:text-pink-500
                active:bg-sky-50 active:border-sky-300 active:text-sky-700"
              >
                Custom Builds
              </Disclosure.Button>
              {} */}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              {}
              <div>{}</div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
