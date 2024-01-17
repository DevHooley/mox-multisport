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

import React from 'react';
import ContactComponent from '@/components/contact';

export default function Order() {
  return (
    <>
      <section className="bg-gray-100 justify-center h-screen flex">
        <div className="flex flex-col  items-center mx-auto mt-20 px-4 sm:px-6 lg:px-8">
          <main className="text-center">
            <h1 className="text-xl sm:text-1xl md:text-3xl lg:text-4xl xl:text-5xl text-slate-800 font-bold mb-2 sm:mb-4 md:mb-6">
              Your Order cannot be completed at this time.
            </h1>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ">
              We apologize for the inconvenience. Please contact us to place
              your order.
            </p>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              <ContactComponent />
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
