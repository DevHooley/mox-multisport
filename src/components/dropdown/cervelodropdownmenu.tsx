import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function CerveloDropdownmenu() {
  return (
    <>
      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5    py-2  font-semibold    items-center text-xl md:text-2xl lg:text-2xl  px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2  active:border-sky-500 active:text-sky-500 pb-4 text-sky-600 whitespace-nowrap ">
        Cervelo
        <ChevronDownIcon
          className="-mr-1 h-6 w-6 relative inline-flex items-center justify-center rounded-md  text-gray-400 hover:bg-gray-50 hover:text-gray-500 "
          aria-hidden="true"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute object-left-top z-10 mt-3 w-56 origin-top-left rounded-b-md bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="py-2">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/cervelo"
                  className={classNames(
                    'block px-4  py-2 text-sm',
                    active
                      ? 'bg-pink-50 border-l-4 pl-3 border-transparent border-pink-500 text-pink-500 active:bg-sky-50 active:border-sky-300 active:text-sky-700'
                      : 'text-gray-700 '
                  )}
                >
                  Road
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/triathlon"
                  className={classNames(
                    'block px-4  py-2 text-sm',
                    active
                      ? 'bg-pink-50 border-l-4 pl-3 border-transparent border-pink-500 text-pink-500 active:bg-sky-50 active:border-sky-300 active:text-sky-700'
                      : 'text-gray-700 '
                  )}
                >
                  Triathlon & Time Trial
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </>
  );
}
