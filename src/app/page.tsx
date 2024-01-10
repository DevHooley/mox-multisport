'use client';

import React from 'react';
import Image from 'next/image';

function ImageComponent() {
  return (
    <div className="rounded-lg overflow-hidden">
      <Image
        src="/Images/frontofstore2.jpg"
        alt="About Us"
        width={400}
        height={300}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

function AddressComponent() {
  return (
    <h2 className="mt-4">
      <a
        href="https://www.google.com/maps/place/Mox+Multisport/@41.884844,-87.6473919,17z/data=..."
        className="text-gray-600 leading-relaxed pt-4"
      >
        Address - 648 W Randolph St, Chicago, IL 60661
      </a>
    </h2>
  );
}

function ContactComponent() {
  const handleDialClick = () => {
    window.location.href = 'tel:+13124669111';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:moxmultisport@gmail.com';
  };

  return (
    <div>
      <h2 className="mt-4">
        <a
          onClick={handleDialClick}
          className="text-gray-600 cursor-pointer leading-relaxed pt-4"
        >
          Phone number - (312) 466-9111
        </a>
      </h2>
      <h2 className="text-gray-600 cursor-pointer leading-relaxed pt-4">
        <a onClick={handleEmailClick}>
          Email: Troy Crady - moxmultisport@gmail.com
        </a>
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="flex items-center justify-center">
        <div className="max-w-7xl mx-auto p-8 md:p-16 bg-white shadow-md rounded-lg">
          <header className="text-2xl md:text-3xl lg:text-4xl font-bold pb-6 mb-6 text-gray-800 text-center">
            We are a full-service bicycle shop located in the heart of Chicago's
            West Loop
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImageComponent />
            <div>
              <p className="text-gray-600 leading-relaxed pt-4">
                At our bicycle shop, we live and breathe cycling. Committed to
                serving our community, we take pride in offering top-notch
                bicycles and accessories. Whether you're a leisurely rider or a
                seasoned cyclist, we've got the perfect bike waiting for you.
                Our team of dedicated experts is ready to guide you in
                discovering the ideal bike and gear to elevate your cycling
                journey. From casual rides to professional races, we're here to
                enhance your cycling experience at every turn.
              </p>
              <p className="text-gray-600 leading-relaxed pt-4">
                Visit us today to explore our wide selection of bikes, from road
                bikes to triathlon bikes and custom builds. We pride ourselves
                on delivering excellent customer service and ensuring that every
                rider finds the perfect fit. Join us on the journey to
                discovering the joy of cycling!
              </p>
              <AddressComponent />
              <ContactComponent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ******* Latest

// 'use client';
// import Image from 'next/image';
// import React from 'react';

// import { ReactNode } from 'react';

// function NavLink({ href, children }: { href: string; children: ReactNode }) {
//   return (
//     <a href={href} className="hover:text-gray-800">
//       {children}
//     </a>
//   );
// }

// export default function Home() {
//   const handleDialClick = () => {
//     window.location.href = 'tel:+13124669111';
//   };

//   const handleEmailClick = () => {
//     window.location.href = 'mailto:moxmultisport@gmail.com';
//   };

//   return (
//     <>
//       <section className="flex items-center justify-center">
//         <div className="max-w-7xl mx-auto p-8 md:p-16 bg-white shadow-md rounded-lg">
//           <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-6 mb-6 text-gray-800 text-center">
//             We are a full-service bicycle shop located in the heart of Chicago's
//             West Loop
//           </h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="rounded-lg overflow-hidden">
//               <Image
//                 src="/Images/frontofstore2.jpg"
//                 alt="About Us"
//                 width={400}
//                 height={300}
//                 className="object-cover w-full h-full"
//               />
//             </div>
//             <div>
// <p className="text-gray-600 leading-relaxed pt-4">
//   At our bicycle shop, we are passionate about cycling and
//   dedicated to providing high-quality bicycles and accessories to
//   our community. Whether you're a casual rider or a seasoned
//   cyclist, we have the perfect bike for you. Our team of experts
//   is here to help you find the ideal bike and gear to enhance your
//   cycling experience.
// </p>
// <p className="text-gray-600 leading-relaxed mt-4">
//   Visit us today to explore our wide selection of bikes, from road
//   bikes to triathlon bikes and custom builds. We pride ourselves
//   on delivering excellent customer service and ensuring that every
//   rider finds the perfect fit. Join us on the journey to
//   discovering the joy of cycling!
// </p>
//               <h2 className="mt-4">
//                 <a
//                   href="https://www.google.com/maps/place/Mox+Multisport/@41.884844,-87.6473919,17z/data=!3m2!4b1!5s0x880e2cc593fa8991:0x5464abfea94a887e!4m6!3m5!1s0x880e2cc540e27dc3:0xda536ce40582cafe!8m2!3d41.884844!4d-87.6448116!16s%2Fg%2F1tdz5dpk?entry=ttu"
//                   className="text-gray-600 leading-relaxed mt-4"
//                 >
//                   Address - 648 W Randolph St, Chicago, IL 60661
//                 </a>
//               </h2>
//               <h2>
//                 <a
//                   onClick={handleDialClick}
//                   className="text-gray-600 leading-relaxed mt-4"
//                 >
//                   Phone number - (312) 466-9111
//                 </a>
//               </h2>
//               <h2 className="text-gray-600 leading-relaxed mt-4">
//                 <a onClick={handleEmailClick}>
//                   Email Troy Crady - moxmultisport@gmail.com
//                 </a>
//               </h2>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// import Image from 'next/image';
// import React from 'react';

// export default function Home() {
//   return (
//     <>
//       <section className="flex items-center justify-center">
//         <div className="max-w-7xl mx-auto p-8 md:p-16 bg-white shadow-md rounded-lg">
//           <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-6 mb-6 text-gray-800 text-center">
//             We are a full-service bicycle shop located in the heart of Chicago's
//             West Loop
//           </h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="rounded-lg overflow-hidden">
//               <Image
//                 src="/Images/frontofstore2.jpg"
//                 alt="About Us"
//                 width={400}
//                 height={300}
//                 className="object-cover w-full h-full"
//               />
//             </div>
//             <div>
//               <p className="text-gray-600 leading-relaxed pt-4">
//                 At our bicycle shop, we are passionate about cycling and
//                 dedicated to providing high-quality bicycles and accessories to
//                 our community. Whether you're a casual rider or a seasoned
//                 cyclist, we have the perfect bike for you. Our team of experts
//                 is here to help you find the ideal bike and gear to enhance your
//                 cycling experience.
//               </p>
//               <p className="text-gray-600 leading-relaxed mt-4">
//                 Visit us today to explore our wide selection of bikes, from road
//                 bikes to triathlon bikes and custom builds. We pride ourselves
//                 on delivering excellent customer service and ensuring that every
//                 rider finds the perfect fit. Join us on the journey to
//                 discovering the joy of cycling!
//               </p>
//               <p className="text-gray-600 leading-relaxed mt-4">
//                 Address - 648 W Randolph St, Chicago, IL 60661
//               </p>
//               <p className="text-gray-600 leading-relaxed mt-4">
//                 Phone number - (312) 466-9111
//               </p>
//               <h1 className="text-gray-600 leading-relaxed mt-4">
//                 <p>Troy Crady</p>
//                 <p>Email - moxmultisport@gmail.com</p>
//               </h1>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// import Image from 'next/image';

// export default function Home() {
//   return (
//     <>
//       <section className="flex items-center justify-center ">
//         <div className="max-w-7xl mx-auto p-16 bg-white shadow-md rounded-lg">
//           <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
//             Welcome to our Bicycle Shop
//           </h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="rounded-lg justify-center items-center max-w-96 overflow-hidden">
//               <Image
//                 src="/Images/frontofstore2.jpg"
//                 alt="About Us"
//                 width={400}
//                 height={300}
//               />
//             </div>
//             <div>
//               <h1 className="text-gray-600 leading-relaxed pt-4">
//                 We are a full-service bicycle shop located in the heart of
//                 Chicago's West Loop.
//               </h1>
//               <p className="text-gray-600 leading-relaxed pt-4">
//                 At our bicycle shop, we are passionate about cycling and
//                 dedicated to providing high-quality bicycles and accessories to
//                 our community. Whether you're a casual rider or a seasoned
//                 cyclist, we have the perfect bike for you. Our team of experts
//                 is here to help you find the ideal bike and gear to enhance your
//                 cycling experience.
//               </p>
//               <p className="text-gray-600 leading-relaxed mt-4">
//                 Visit us today to explore our wide selection of bikes, from road
//                 bikes to triathlon bikes and custom builds. We pride ourselves
//                 on delivering excellent customer service and ensuring that every
//                 rider finds the perfect fit. Join us on the journey to
//                 discovering the joy of cycling!
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// import Image from 'next/image';

// export default function Home() {
//   return (
//     <>
//       <section className=" flex rounded-md items-center  justify-center">
//         <div className="max-w-6xl max-w mx-auto p-8 bg-white shadow-md rounded-lg">
//           <h1 className="text-4xl font-bold mb-6 text-gray-800">
//             Welcome to our Bicycle Shop
//           </h1>
//           <div className="flex">
//             <div className="w-1/2">
//               <div className="rounded-lg max-w-96 overflow-hidden">
//                 <Image
//                   src="/Images/frontofstore2.jpg"
//                   alt="About Us"
//                   width={400}
//                   height={300}
//                 />
//               </div>
//             </div>
//             <div className="w-1/2">
//               <div>
//                 <h1 className="text-gray-600 pl-2 leading-relaxed pt-4">
//                   We are a full-service bicycle shop located in the heart of
//                   Chicago's West Loop.
//                 </h1>
//               </div>
//             </div>
//           </div>
//           <p className="text-gray-600 leading-relaxed pt-4">
//             At our bicycle shop, we are passionate about cycling and dedicated
//             to providing high-quality bicycles and accessories to our community.
//             Whether your a casual rider or a seasoned cyclist, we have the
//             perfect bike for you. Our team of experts is here to help you find
//             the ideal bike and gear to enhance your cycling experience.
//           </p>
//           <p className="text-gray-600 leading-relaxed mt-4">
//             Visit us today to explore our wide selection of bikes, from road
//             bikes to triathlon bikes and custom builds. We pride ourselves on
//             delivering excellent customer service and ensuring that every rider
//             finds the perfect fit. Join us on the journey to discovering the joy
//             of cycling!
//           </p>
//         </div>
//       </section>
//     </>
//   );
// }
