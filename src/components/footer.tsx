'use client';

import React from 'react';

// Custom NavLink component for consistent styling
import { ReactNode } from 'react';

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="hover:text-gray-800">
      {children}
    </a>
  );
}

export default function Footer() {
  const handleDialClick = () => {
    window.location.href = 'tel:+13124669111';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:moxmultisport@gmail.com';
  };

  return (
    <div className="py-0.5">
      <footer className="bg-sky-300  h-10 shadow-sm  text-white py-6">
        {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start lg:justify-center md:justify-center lg:items-center space-y-4 sm:space-y-0 md:item sm:space-x-8">
            <div>
              <a
                href="https://www.google.com/maps/place/Mox+Multisport/@41.884844,-87.6473919,17z/data=!3m2!4b1!5s0x880e2cc593fa8991:0x5464abfea94a887e!4m6!3m5!1s0x880e2cc540e27dc3:0xda536ce40582cafe!8m2!3d41.884844!4d-87.6448116!16s%2Fg%2F1tdz5dpk?entry=ttu"
                className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-xl whitespace-nowrap"
              >
                Address - 648 W Randolph St, Chicago, IL 60661
              </a>
            </div>
            <div className="flex-shrink-0">
              <a
                className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-xl cursor-pointer whitespace-nowrap"
                onClick={handleDialClick}
              >
                Phone number - (312) 466-9111
              </a>
            </div>
            <div>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-xl  whitespace-nowrap">
                Troy Crady
              </p>
              <a href="mailto:moxmultisport@gmail.com?subject=Thank%20you%20for%20visiting%20our%20website">
                Email - moxmultisport@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-col cursor-pointer sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8"></div>
        </div> */}
      </footer>
    </div>
  );
}

{
  /* <a href="mailto:nick@devnick.com">SEND ME AN EMAIL</a>; */
}

// 'use client';

// import React from 'react';

// export default function Footer() {
//   const handleDialClick = () => {
//     window.location.href = 'tel:+13124669111';
//   };

//   return (
//     <div className="pt-2">
//       <footer className="bg-sky-300 shadow-sm rounded-md text-white py-6">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-8">
//             <div className="flex-shrink-0">
//               <a
//                 className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-xl font-bold whitespace-nowrap"
//                 onClick={handleDialClick}
//               >
//                 Phone number - (312) 466-9111
//               </a>
//             </div>
//             <div>
//               <a
//                 href="https://www.google.com/maps/place/Mox+Multisport/@41.884844,-87.6473919,17z/data=!3m2!4b1!5s0x880e2cc593fa8991:0x5464abfea94a887e!4m6!3m5!1s0x880e2cc540e27dc3:0xda536ce40582cafe!8m2!3d41.884844!4d-87.6448116!16s%2Fg%2F1tdz5dpk?entry=ttu"
//                 className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-xl"
//               >
//                 Address - 648 W Randolph St, Chicago, IL 60661
//               </a>
//             </div>
//             <div className="inline-flex items-center border-2  text-xl md:text-2xl active:border-2 border-transparent lg:text-2xl font-medium px-3 active:text-white active:border-sky-200   text-white  hover:bg-sky-200  active:shadow-inner  rounded-md transition-transform duration-300 transform active:scale-100  hover:shadow-md hover:scale-110 hover:text-white">
//               <a href="/">Home</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// // Custom NavLink component for consistent styling
// import { ReactNode } from 'react';

// function NavLink({ href, children }: { href: string; children: ReactNode }) {
//   return (
//     <a href={href} className="hover:text-gray-800">
//       {children}
//     </a>
//   );
// }
