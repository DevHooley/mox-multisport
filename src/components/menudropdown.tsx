import { Menu } from '@headlessui/react';

const links = [
  { href: '/Cervelo', label: 'Road Bikes' },
  { href: '/Cervelo', label: 'Cervelo' },
  { href: '/Pinarello', label: 'Pinarrelo' },
  { href: '/Cannondale', label: 'Cannondale' },
];

const Brand = [
  { href: '/', label: 'Home' },
  { href: '/Cervelo', label: 'Road Bikes' },
  { href: '/triathlon', label: 'Triathlon' },
  { href: '/custombuilds', label: 'Custom Builds' },
];

export default function MyDropdown() {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="relative">
            {Brand.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex h-14 items-center text-xl md:text-2xl lg:text-2xl font-medium px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </Menu.Button>
          {open && (
            <Menu.Items className="absolute left-0 mt-16 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {links.map((link) => (
                <Menu.Item
                  as="a"
                  key={link.href}
                  href={link.href}
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-pink-500 hover:bg-pink-50 hover:text-pink-500
                active:bg-sky-50 active:border-sky-300 active:text-sky-700"
                >
                  {link.label}
                </Menu.Item>
              ))}
            </Menu.Items>
          )}
        </>
      )}
    </Menu>
  );
}

// import { Menu } from '@headlessui/react';

// const links = [
//   { href: '/Cervelo', label: 'Road Bikes' },
//   { href: '/Cervelo', label: 'Cervelo' },
//   { href: '/Pinarello', label: 'Pinarrelo' },
//   { href: '/Cannondale', label: 'Cannondale' },
// ];

// const Brand = [
//   { href: '/', label: 'Home' },
//   { href: '/Cervelo', label: 'Road Bikes' },
//   { href: '/triathlon', label: 'Triathlon' },
//   { href: '/custombuilds', label: 'Custom Builds' },
// ];

// export default function MyDropdown() {
//   return (
//     <Menu>
//       <Menu.Button className="">
//         {Brand.map((item) => (
//           <a
//             key={item.href}
//             href={item.href}
//             className="px-4 py-2 text-xl md:text-2xl lg:text-2xl  hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap focus:outline-none"
//           >
//             {item.label}
//           </a>
//         ))}
//       </Menu.Button>
//       <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//         {links.map((link) => (
//           <Menu.Item
//             as="a"
//             key={link.href}
//             href={link.href}
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           >
//             {link.label}
//           </Menu.Item>
//         ))}
//       </Menu.Items>
//     </Menu>
//   );
// }

// import { Menu } from '@headlessui/react';

// const links = [
//   { href: '/account-settings', label: 'Account settings' },
//   { href: '/support', label: 'Support' },
//   { href: '/license', label: 'License' },
//   { href: '/sign-out', label: 'Sign out' },
// ];

// const Brand = [
//   { href: '/', label: 'Home' },
//   { href: '/roadbikes', label: 'Road Bikes' },
//   { href: '/triathlon', label: 'Triathlon' },
//   { href: '/custombuilds', label: 'Custom Builds' },
// ];

// export default function MyDropdown() {
//   return (
//     <Menu>
//       <Menu.Button className="text-gray-700 hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 text-sky-600 whitespace-nowrap focus:outline-none">

//         Options    i want to dynamically add the links from the Brand array here

//       </Menu.Button>
//       <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//         {links.map((link) => (
//           <Menu.Item
//             as="a"
//             key={link.href}
//             href={link.href}
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           >
//             {link.label}
//           </Menu.Item>
//         ))}
//       </Menu.Items>
//     </Menu>
//   );
// }

// import { Menu } from '@headlessui/react';

// const links = [
//   { href: '/account-settings', label: 'Account settings' },
//   { href: '/support', label: 'Support' },
//   { href: '/license', label: 'License' },
//   { href: '/sign-out', label: 'Sign out' },
// ];

// export default function MyDropdown() {
//   return (
//     <Menu>
//       <Menu.Button>Options</Menu.Button>
//       <Menu.Items>
//         {links.map((link) => (
//           <Menu.Item
//             as="a"
//             key={link.href}
//             href={link.href}
//             className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
//           >
//             {link.label}
//           </Menu.Item>
//         ))}
//       </Menu.Items>
//     </Menu>
//   );
// }

// 'use client';

// import { Menu } from '@headlessui/react';

// export default function MyDropdown() {
//   return (
//     <Menu>
//       <Menu.Button className="text-gray-700">More</Menu.Button>
//       <Menu.Items className="origin-top-left absolute left-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
//         <div className="relative">
//           <Menu.Item>
//             {({ active }) => (
//               <a
//                 className={`block px-4 py-2 text-sm text-gray-700 ${
//                   active ? 'bg-blue-500 text-gray-800' : ''
//                 }`}
//                 href="/account-settings"
//               >
//                 Account settings
//               </a>
//             )}
//           </Menu.Item>
//           <Menu.Item>
//             {({ active }) => (
//               <a
//                 className={`block px-4 py-2 text-sm text-gray-700 ${
//                   active ? 'bg-blue-500 text-gray-800' : ''
//                 }`}
//                 href="/documentation"
//               >
//                 Documentation
//               </a>
//             )}
//           </Menu.Item>
//           <Menu.Item disabled>
//             <span className="block px-4 py-2 text-sm opacity-75">
//               Invite a friend (coming soon!)
//             </span>
//           </Menu.Item>
//         </div>
//       </Menu.Items>
//     </Menu>
//   );
// }

// import { Menu } from '@headlessui/react';

// export default function MyDropdown() {
//   return (
//     <Menu>
//       <Menu.Button className="text-gray-700">More</Menu.Button>
//       <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
//         <Menu.Item>
//           {({ active }) => (
//             <a
//               className={`block px-4 py-2 text-sm text-gray-700 ${
//                 active ? 'bg-blue-500 text-gray-800' : ''
//               }`}
//               href="/account-settings"
//             >
//               Account settings
//             </a>
//           )}
//         </Menu.Item>
//         <Menu.Item>
//           {({ active }) => (
//             <a
//               className={`block px-4 py-2 text-sm text-gray-700 ${
//                 active ? 'bg-blue-500 text-gray-800' : ''
//               }`}
//               href="/documentation"
//             >
//               Documentation
//             </a>
//           )}
//         </Menu.Item>
//         <Menu.Item disabled>
//           <span className="block px-4 py-2 text-sm opacity-75">
//             Invite a friend (coming soon!)
//           </span>
//         </Menu.Item>
//       </Menu.Items>
//     </Menu>
//   );
// }

// "use client"

// import { Menu } from '@headlessui/react';

// export default function MyDropdown() {
//   return (
//     <Menu>
//       <Menu.Button className="text-gray-700">More</Menu.Button>
//       <Menu.Items>
//         <Menu.Item>
//           {({ active }) => (
//             <a
//               className={`${active && 'bg-blue-500 text-gray-800'}`}
//               href="/account-settings"
//             >
//               Account settings
//             </a>
//           )}
//         </Menu.Item>
//         <Menu.Item>
//           {({ active }) => (
//             <a
//               className={`${active && 'bg-blue-500 text-gray-800'}`}
//               href="/account-settings"
//             >
//               Documentation
//             </a>
//           )}
//         </Menu.Item>
//         <Menu.Item disabled>
//           <span className="opacity-75">Invite a friend (coming soon!)</span>
//         </Menu.Item>
//       </Menu.Items>
//     </Menu>
//   );
// }
