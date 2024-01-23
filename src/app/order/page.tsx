// 'use client';

// import React from 'react';
// import ContactComponent from '@/components/contact';

// export default function Order() {
//   return (
//     <>
//       <section className="bg-gray-100  justify-center h-screen flex">
//         <div className="justify-center items-center mt-36">
//           <main className="text-center">
//             <h1 className="text-4xl text-slate-800 font-bold mb-4">
//               Your Order cannot be completed at this time.
//             </h1>
//             <p className="text-gray-700 text-xl">
//               We apologize for the inconvenience. Please contact us to place
//               your order.
//             </p>
//             <div className="text-xl">
//               <ContactComponent />
//             </div>
//           </main>
//         </div>
//       </section>
//     </>
//   );
// }

'use client';

import { useLayoutEffect, useRef } from 'react';
import React from 'react';
import ContactComponent from '@/components/contact';
import Image from 'next/image';

export default function Order() {
  const firstSectionRef = useRef(null);

  useLayoutEffect(() => {
    // Set the initial scroll position to scroll to the start of the first section
    if (firstSectionRef.current) {
      const sectionPosition = firstSectionRef.current.offsetTop;
      window.scrollTo(0, sectionPosition);
    }
  }, []);

  return (
    <>
      <section
        ref={firstSectionRef}
        className="bg-white justify-center h-screen flex"
      >
        <div className="flex flex-col items-center mx-auto mt-20 px-4 sm:px-6 lg:px-8">
          <main className="text-center ml-5">
            <h1 className="text-8xl text-slate-800">Oops!</h1>
            <p className="text-red-600 text-xl sm:text-2xl md:text-3xl pt-8 lg:text-4xl xl:text-5xl">
              Error 404 - Page Not Found
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl pt-8 lg:text-4xl xl:text-5xl text-slate-700 font-bold mb-2 sm:mb-4 md:mb-6">
              Your Order cannot be completed at this time.
            </h1>

            <p className="text-gray-700 text-base sm:text-md md:text-lg lg:text-xl xl:text-2xl">
              We apologize for the inconvenience. Please contact us to place
              your order.
            </p>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              {/* Assuming ContactComponent handles its own styling */}
              <ContactComponent />
              <div className=" flex pt-8 justify-center items-center">
                <div style={{ maxWidth: '500px', width: '100%' }}>
                  <Image
                    src="/404cartoon.jpg"
                    alt="cartoon cycling crash"
                    layout="responsive"
                    width={500}
                    height={300}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

// 'use client';

// import React from 'react';
// import ContactComponent from '@/components/contact';

// export default function Order() {
//   return (
//     <>
//       <section className="bg-gray-100 justify-center h-screen flex">
//         <div className="flex flex-col  items-center mx-auto mt-20 px-4 sm:px-6 lg:px-8">
//           <main className="text-center ml-5">
//             <h1 className="text-xl sm:text-1xl md:text-3xl ml-2 lg:text-4xl xl:text-5xl text-slate-800 font-bold mb-2 sm:mb-4 md:mb-6">
//               Your Order cannot be completed at this time.
//             </h1>
//             <p className="text-gray-700 text-base sm:text-md md:text-xlg lg:text-2xl xl:text-3xl ">
//               We apologize for the inconvenience.
//             </p>
//             <p
//               className="
//               text-gray-700
//               text-sm
//               sm:text-base
//               md:text-lg
//               lg:text-xl
//               xl:text-2xl"
//             >
//               Please contact us to place your order.
//             </p>
//             <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
//               <ContactComponent />
//             </div>
//           </main>
//         </div>
//       </section>
//     </>
//   );
// }
