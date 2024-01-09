/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const image = 'MoxLogo.jpg';

export default function Navigation() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl bg-sky-100 px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex overflow-x-auto">
                <div className="hidden p-2 sm:flex md:space-x-8 lg:space-x-8">
                  <a href="/" className="flex pr-4 flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src={image}
                      alt="Your Company"
                    />
                  </a>
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="/"
                    className="inline-flex items-center border-2  text-xl md:text-2xl active:border-2 border-transparent lg:text-2xl font-medium px-3 active:text-slate-700 active:border-sky-200   text-gray-700  hover:bg-sky-200 active:bg-sky-100 active:shadow-inner  rounded-md transition-transform duration-300 transform active:scale-100  hover:shadow-md hover:scale-110 hover:text-gray-800"
                  >
                    Home
                  </a>

                  <a
                    href="/roadbikes"
                    className="inline-flex items-center border-2  text-xl md:text-2xl active:border-2 border-transparent lg:text-2xl font-medium px-3 active:text-slate-700 active:border-sky-200   text-gray-700  hover:bg-sky-200 active:bg-sky-100 active:shadow-inner  rounded-md transition-transform duration-300 transform active:scale-100  hover:shadow-md hover:scale-110 hover:text-gray-800 whitespace-nowrap"
                  >
                    Road Bikes
                  </a>

                  <a
                    href="/triathlon"
                    className="inline-flex items-center border-2  text-xl md:text-2xl active:border-2 border-transparent lg:text-2xl font-medium px-3 active:text-slate-700 active:border-sky-200   text-gray-700  hover:bg-sky-200 active:bg-sky-100 active:shadow-inner  rounded-md transition-transform duration-300 transform active:scale-100  hover:shadow-md hover:scale-110 hover:text-gray-800"
                  >
                    Triathlon
                  </a>
                  <a
                    href="/custombuilds"
                    className="inline-flex items-center border-2  text-xl md:text-2xl active:border-2 border-transparent lg:text-2xl font-medium px-3 active:text-slate-700 active:border-sky-200   text-gray-700  hover:bg-sky-200 active:bg-sky-100 active:shadow-inner  rounded-md transition-transform duration-300 transform active:scale-100  hover:shadow-md hover:scale-110 hover:text-gray-800 whitespace-nowrap"
                  >
                    Custom Builds
                  </a>
                  <a
                    href="/about"
                    className="inline-flex items-center border-2  text-xl md:text-2xl active:border-2 border-transparent lg:text-2xl font-medium px-3 active:text-slate-700 active:border-sky-200   text-gray-700  hover:bg-sky-200 active:bg-sky-100 active:shadow-inner  rounded-md transition-transform duration-300 transform active:scale-100  hover:shadow-md hover:scale-110 hover:text-gray-800"
                  >
                    About
                  </a>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {/* <button
                  type="button"
                  className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  {/* <div>
                    <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div> */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    {/* <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
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
                            Settings
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
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items> */}
                  </Transition>
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
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="roadbikes"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
              >
                Road Bikes
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/triathlon"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
              >
                Triathlon
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/custombuilds"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
              >
                Custom Builds
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
              >
                About
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              {/* <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div> */}
              <div>
                {/* <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Sign out
                </Disclosure.Button> */}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
