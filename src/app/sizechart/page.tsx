'use client'

// Import necessary modules and components
import React from 'react';
import Image from 'next/image';

// Your data array
const data = [
  [425, 430, 492, 75.25, 70, 415, 125, 67, 52, 373, 341.9, 527.5],
  [450, 460, 509, 74.5, 70.5, 415, 130, 72, 52, 373, 352.1, 539.2],
  [470, 490, 525, 74, 71, 415, 142, 72, 52, 373, 361.9, 552.4],
  [495, 515, 536, 73.75, 71.5, 415, 151, 72, 47, 373, 368.5, 564.4],
  [510, 530, 545, 73.5, 72, 415, 161, 72, 47, 373, 372.5, 575.8],
  [525, 545, 555, 73.25, 72.25, 415, 173, 72, 47, 373, 376.7, 588.2],
  [540, 560, 565, 73, 72.5, 415, 187, 72, 47, 373, 380.2, 602.4],
  [560, 580, 577, 72.75, 72.5, 415, 211, 67, 47, 373, 384.1, 620.3],
  [590, 600, 590, 72.5, 72.5, 415, 232, 67, 47, 373, 388.1, 640.4],
];

// Your SizeChart component
// Your SizeChart component
export default function SizeChart() {
  return (
    <>
      <section className="bg-white h-auto flex items-center pt-2 pb-2 justify-center">
        <div className="max-w-[600px] mx-auto p-4">
          <main className="text-center">
            <div className="max-w-full">
              <div className="mt-4 sm:mt-0">
                <Image
                  src="/pinarello/road/pinarello-x1-white-105-sizechart.png"
                  alt="size chart for Pinarrelo x1"
                  width={500} // Update width to one-third of the current size
                  height={300} // Update height to one-third of the current size
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <div className="pt-4">
                <table
                  className="divide-y text-slate-700 divide-gray-200"
                  style={{ fontSize: '12px', width: '100%' }}
                >
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col">CE</th>
                      <th scope="col">CE</th>
                      <th scope="col">CC</th>
                      <th scope="col">L</th>
                      <th scope="col">A [°]</th>
                      <th scope="col">B [°]</th>
                      <th scope="col">P</th>
                      <th scope="col">T</th>
                      <th scope="col">D</th>
                      <th scope="col">R</th>
                      <th scope="col">G</th>
                      <th scope="col">REACH</th>
                      <th scope="col">STACK</th>
                      {/* ... (rest of your table header) */}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row, index) => (
                      <tr key={index}>
                        {Object.values(row).map((value, idx) => (
                          <td key={idx} className="px-2 py-2 whitespace-nowrap">
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

// export default function SizeChart() {
//   return (
//     <>
//       <section className="bg-white justify-center h-screen flex">
//         <div className="flex flex-col items-center mx-auto mt-20 px-1 sm:px-4 lg:px-8">
//           <main className="text-center">
//             <div className="max-w-full">
//               <div className="mt-4 sm:mt-0">
//                 <Image
//                   src="/pinarello/road/pinarello-x1-white-105-sizechart.png"
//                   alt="size chart for Pinarrelo x1"
//                   width={500} // Update width to one-third of the current size
//                   height={300} // Update height to one-third of the current size
//                   style={{ width: 'auto', height: 'auto' }}
//                 />
//               </div>
//               <div className="p-1">
//                 <table
//                   className="divide-y text-slate-700 divide-gray-200"
//                   style={{ fontSize: '12px', width: '100%' }}
//                 >
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th scope="col">CE</th>
//                       {/* ... (rest of your table header) */}
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {data.map((row, index) => (
//                       <tr key={index}>
//                         {Object.values(row).map((value, idx) => (
//                           <td key={idx} className="px-4 py-2 whitespace-nowrap">
//                             {value}
//                           </td>
//                         ))}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </main>
//         </div>
//       </section>
//     </>
//   );
// }

// export default function SizeChart() {
//   return (
//     <>
//       <section className="bg-white justify-center h-screen  flex">
//         <div className="flex flex-col items-center mx-auto mt-20  px-4 sm:px-6 lg:px-8">
//           <main className="text-center">
//             <div className="">
//               <div>
//                 <div className="mt-4 item-center justify-center sm:mt-0">
//                   <Image
//                     src="/pinarello/road/pinarello-x1-white-105-sizechart.png"
//                     alt="size chart for Pinarrelo x1"
//                     width={500} // Update width to one-third of the current size
//                     height={300} // Update height to one-third of the current size
//                     style={{ width: 'auto', height: 'auto' }}
//                   />
//                 </div>
//                 <div className="">
//                   <table
//                     className="divide-y text-slate-700 divide-gray-200"
//                     style={{ fontSize: '12px' }}
//                   >
//                     <thead className="bg-gray-50">
                      // <tr>
                      //   <th scope="col">CE</th>
                        // <th scope="col">CE</th>
                        // <th scope="col">CC</th>
                        // <th scope="col">L</th>
                        // <th scope="col">A [°]</th>
                        // <th scope="col">B [°]</th>
                        // <th scope="col">P</th>
                        // <th scope="col">T</th>
                        // <th scope="col">D</th>
                        // <th scope="col">R</th>
                        // <th scope="col">G</th>
                        // <th scope="col">REACH</th>
                        // <th scope="col">STACK</th>
                      // </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {data.map((row, index) => (
//                         <tr key={index}>
//                           {Object.values(row).map((value, idx) => (
//                             <td
//                               key={idx}
//                               className="px-4 py-2 whitespace-nowrap" // Adjust padding and other styles
//                             >
//                               {value}
//                             </td>
//                           ))}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </section>
//     </>
//   );
// }

// 'use client';

// import React from 'react';
// import Image from 'next/image';

// const data = [
//   [425, 430, 492, 75.25, 70, 415, 125, 67, 52, 373, 341.9, 527.5],
//   [450, 460, 509, 74.5, 70.5, 415, 130, 72, 52, 373, 352.1, 539.2],
//   [470, 490, 525, 74, 71, 415, 142, 72, 52, 373, 361.9, 552.4],
//   [495, 515, 536, 73.75, 71.5, 415, 151, 72, 47, 373, 368.5, 564.4],
//   [510, 530, 545, 73.5, 72, 415, 161, 72, 47, 373, 372.5, 575.8],
//   [525, 545, 555, 73.25, 72.25, 415, 173, 72, 47, 373, 376.7, 588.2],
//   [540, 560, 565, 73, 72.5, 415, 187, 72, 47, 373, 380.2, 602.4],
//   [560, 580, 577, 72.75, 72.5, 415, 211, 67, 47, 373, 384.1, 620.3],
//   [590, 600, 590, 72.5, 72.5, 415, 232, 67, 47, 373, 388.1, 640.4],
// ];

// export default function SizeChart() {
//   return (
//     <>
//       <section className="bg-gray-100 justify-center h-screen flex">
//         <div className="flex flex-col items-center mx-auto mt-20 px-4 sm:px-6 lg:px-8">
//           <main className="text-center ml-5">
//             <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-2">
//               <div>
//                 <table className="min-w-full divide-y text-slate-700 divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
// <th scope="col">CE</th>
// <th scope="col">CC</th>
// <th scope="col">L</th>
// <th scope="col">A [°]</th>
// <th scope="col">B [°]</th>
// <th scope="col">P</th>
// <th scope="col">T</th>
// <th scope="col">D</th>
// <th scope="col">R</th>
// <th scope="col">G</th>
// <th scope="col">REACH</th>
// <th scope="col">STACK</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {data.map((row, index) => (
//                       <tr key={index}>
//                         {Object.values(row).map((value, idx) => (
//                           <td key={idx} className="px-6 py-4 whitespace-nowrap">
//                             {value}
//                           </td>
//                         ))}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <div>
//                 <Image
//                   src='/pinarello/road/pinarello-x1-white-105-sizechart.png'
//                   alt="size chart for Pinarrelo x1"
//                   width={500}
//                   height={300}
//                   style={{ width: 'auto', height: 'auto' }}
//                 />
//               </div>
//             </div>
//           </main>
//         </div>
//       </section>
//     </>
//   );
// }
