import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure",
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

export default function CustomMenu() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <span>Solutions</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {solutions.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

// // CustomMenu.js

// 'use client';
// import { Fragment, useState } from 'react';
// import { Menu, Transition } from '@headlessui/react';
// import classNames from 'classnames';
// import classNames from 'classnames';

// const RoadBikes = ['Road Bikes'];

// export default function CustomMenu() {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <>
//       <div
//         className="relative inline-flex items-center text-xl md:text-2xl lg:text-2xl font-medium px-2 group"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <Menu.Button
//           className={classNames(
//             'border-transparent',
//             'hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500',
//             'active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap focus:outline-none',
//             { 'bg-gray-100': isHovered }
//           )}
//         >
//           {RoadBikes}
//         </Menu.Button>
//         <Transition
//           as={Fragment}
//           show={isHovered}
//           enter="transition ease-out duration-200"
//           enterFrom="transform opacity-0 scale-95"
//           enterTo="transform opacity-100 scale-100"
//           leave="transition ease-in duration-75"
//           leaveFrom="transform opacity-100 scale-100"
//           leaveTo="transform opacity-0 scale-95"
//         >
//           <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//             <div className="py-1">
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="/roadbikes/"
//                     className={classNames(
//                       active ? 'bg-gray-100' : '',
//                       'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'
//                     )}
//                   >
//                     Cervelo
//                   </a>
//                 )}
//               </Menu.Item>
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="/roadbikes-category2"
//                     className={classNames(
//                       active ? 'bg-gray-100' : '',
//                       'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'
//                     )}
//                   >
//                     Cannondale
//                   </a>
//                 )}
//               </Menu.Item>
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="/roadbikes-category2"
//                     className={classNames(
//                       active ? 'bg-gray-100' : '',
//                       'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'
//                     )}
//                   >
//                     Look
//                   </a>
//                 )}
//               </Menu.Item>
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="/roadbikes-category2"
//                     className={classNames(
//                       active ? 'bg-gray-100' : '',
//                       'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'
//                     )}
//                   >
//                     Pinnarelo
//                   </a>
//                 )}
//               </Menu.Item>
//               {/* Add more dropdown items as needed */}
//             </div>
//           </Menu.Items>
//         </Transition>
//       </div>
//     </>
//   );
// }

// 'use client';

// import { Fragment } from 'react';
// import { Disclosure, Menu, Transition } from '@headlessui/react';

// const RoadBikes = ['Road Bikes'];

// function classNames(...classes: any[] | boolean[]) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function CustomMenu() {
//   return (
//     <>
//       <Menu
//         as="div"
//         className="relative inline-flex items-center text-xl md:text-2xl lg:text-2xl font-medium px-2 group"
//       >
//         <Menu.Button className="border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap focus:outline-none">
//           {RoadBikes}
//         </Menu.Button>
//         <Transition
//           as={Fragment}
//           enter="transition ease-out duration-200"
//           enterFrom="transform opacity-0 scale-95"
//           enterTo="transform opacity-100 scale-100"
//           leave="transition ease-in duration-75"
//           leaveFrom="transform opacity-100 scale-100"
//           leaveTo="transform opacity-0 scale-95"
//         >
//           <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//             <div className="py-1">
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="/roadbikes/"
//                     className={classNames(
//                       active ? 'bg-gray-100' : '',
//                       'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'
//                     )}
//                   >
//                     Cervelo
//                   </a>
//                 )}
//               </Menu.Item>
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="/roadbikes-category2"
//                     className={classNames(
//                       active ? 'bg-gray-100' : '',
//                       'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'
//                     )}
//                   >
//                     Cannondale
//                   </a>
//                 )}
//               </Menu.Item>{' '}
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="/roadbikes-category2"
//                     className={classNames(
//                       active ? 'bg-gray-100' : '',
//                       'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'
//                     )}
//                   >
//                     Look
//                   </a>
//                 )}
//               </Menu.Item>{' '}
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="/roadbikes-category2"
//                     className={classNames(
//                       active ? 'bg-gray-100' : '',
//                       'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'
//                     )}
//                   >
//                     Pinnarelo
//                   </a>
//                 )}
//               </Menu.Item>
//               {/* Add more dropdown items as needed */}
//             </div>
//           </Menu.Items>
//         </Transition>
//       </Menu>
//     </>
//   );
// }
