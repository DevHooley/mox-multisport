import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import CerveloDropdownmenu from './cervelodropdownmenu';
import RoadbikesDropdownmenu from './roadbikesdropdownmenu';
import CannondaleDropdownmenu from './cannondaledropdownmenu';
import TriathlonDropdownmenu from './triathlondropdownmenu';
import Pinarellodropdownmenu from './pinarellodropdownmenu';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Dropdown() {
  return (
    <div className="flex">
      <Menu as="div" className="  inline-block text-left">
        <Menu.Button className="inline-flex w-full justify-center  pr-6  py-2  font-semibold    items-center text-xl md:text-2xl lg:text-2xl  px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2  active:border-sky-500 active:text-sky-500 pb-4 text-sky-600 whitespace-nowrap ">
          <Link href="/">Home</Link>
        </Menu.Button>
      </Menu>
      <Menu as="div" className="  inline-block text-left">
        <RoadbikesDropdownmenu />
      </Menu>
      <Menu as="div" className="  inline-block text-left">
        <CerveloDropdownmenu />
      </Menu>

      <Menu as="div" className="  inline-block text-left">
        <CannondaleDropdownmenu />
      </Menu>
      <Menu as="div" className="  inline-block text-left">
        <Pinarellodropdownmenu />
      </Menu>

      <Menu as="div" className="  inline-block text-left">
        <TriathlonDropdownmenu />
      </Menu>
    </div>
  );
}

// import { Fragment } from 'react';
// import { Menu, Transition } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ');
// }

// const NavigationButtons = [
//   {
//     label: 'Cervelo',
//     href: '/cervelo',
//   },
//   {
//     label: 'Pinarello',
//     href: 'pinarello',
//   },
//   {
//     label: 'Cannondale',
//     href: '/cannondale',
//   },
//   {
//     label: 'Custom Builds',
//     href: '/custombuilds',
//   },
// ];

// export default function Dropdown() {
//   return (
//     <Menu as="div" className="absolute inline-block text-left">
//       <div className="flex overflow-x-auto">
//         <Menu.Button className="inline-flex w-full justify-center gap-x-1.5    py-2  font-semibold    items-center text-xl md:text-2xl lg:text-2xl  px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2  active:border-sky-500 active:text-sky-500 pb-4 text-sky-600 whitespace-nowrap ">
//           Road Bikes
//           <ChevronDownIcon
//             className="-mr-1 h-6 w-6 relative inline-flex items-center justify-center rounded-md  text-gray-400 hover:bg-gray-50 hover:text-gray-500 "
//             aria-hidden="true"
//           />
//         </Menu.Button>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="absolute left-0 z-10 mt-3 w-56 origin-top-right rounded-b-md bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
//           <div className="py-2">
//             {NavigationButtons.map((button) => (
//               <Menu.Item key={button.href}>
//                 {({ active }) => (
//                   <a
//                     href={button.href}
//                     className={classNames(
//                       'block px-4  py-2 text-sm',
//                       active
//                         ? 'bg-pink-50 border-l-4 pl-3 border-transparent border-pink-500 text-pink-500 active:bg-sky-50 active:border-sky-300 active:text-sky-700'
//                         : 'text-gray-700 '
//                     )}
//                   >
//                     {button.label}
//                   </a>
//                 )}
//               </Menu.Item>
//             ))}
//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   );
// }
