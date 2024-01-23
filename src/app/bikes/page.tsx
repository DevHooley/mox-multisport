'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import products from '@/components/roadbikedata/roadbikedatamaster';
import Link from 'next/link';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface Product {
  id: number;
  version: string;
  name: string;
  description: string;
  about: string;
  price: string;
  sizes: string[];
  image: string;
  url: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function CerveloRoadbikes() {
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([
    ...products,
  ]);
  const [shouldScroll, setShouldScroll] = useState(true);
  const firstSectionRef = useRef(null);

  const handleResetSort = () => {
    console.log('Resetting');
    setSortBy(null);
    setSortedProducts([...products]);
  };

  const filteredProducts = selectedBrand
    ? sortedProducts.filter((product) => product.brand === selectedBrand)
    : sortedProducts;

  const handleBrandFilter = (brand: string) => {
    console.log('Filtering by brand:', brand);
    setSelectedBrand(brand);
  };

  const sortByPrice = (order: 'highest' | 'lowest'): Product[] => {
    const sortedProducts = [...products].sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/,/g, '')); // Convert string to numeric value
      const priceB = parseFloat(b.price.replace(/,/g, '')); // Convert string to numeric value

      return order === 'highest' ? priceB - priceA : priceA - priceB;
    });

    setSortBy(order);
    return sortedProducts;
  };

  const handleSortBy = (order: 'highest' | 'lowest') => {
    const sortedProducts = sortByPrice(order);
    console.log('Sorted Products:', sortedProducts);
    setSortedProducts(sortedProducts);
  };

  return (
    <>
      <section ref={firstSectionRef} className="bg-gray-50">
        <main className="flex justify-center items-center p-4">
          <div className="text-center">
            <h1 className="text-xl sm:text-xl lg:text-2xl xl:text-3xl text-slate-700 font-semibold mb-4"></h1>
            <div className="pb-5 space-x-2">
              <Menu as="div" className="  inline-block text-left">
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5    py-2  font-semibold    items-center text-xl md:text-2xl lg:text-2xl  px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2  active:border-sky-500 active:text-sky-500 pb-4 text-sky-600 whitespace-nowrap ">
                  Filter
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
                  <Menu.Items className="absolute object-left-top z-10 mt-3 w-48 origin-top-left rounded-b-md bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                    <div className="py-2">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                              handleSortBy('highest');
                            }}
                            className={classNames(
                              'block px-4  py-2 text-sm',
                              active
                                ? 'bg-pink-50 border-l-4 pl-3 border-transparent border-pink-500 text-pink-500 active:bg-sky-50 active:border-sky-300 active:text-sky-700'
                                : 'text-gray-700 '
                            )}
                          >
                            Highest Price
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                              handleSortBy('lowest');
                            }}
                            className={classNames(
                              'block px-4  py-2 text-sm',
                              active
                                ? 'bg-pink-50 border-l-4 pl-3 border-transparent border-pink-500 text-pink-500 active:bg-sky-50 active:border-sky-300 active:text-sky-700'
                                : 'text-gray-700 '
                            )}
                          >
                            Lowest Price
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={handleResetSort}
                            className={classNames(
                              'block px-4  py-2 text-sm',
                              active
                                ? 'bg-pink-50 border-l-4 pl-3 border-transparent border-pink-500 text-pink-500 active:bg-sky-50 active:border-sky-300 active:text-sky-700'
                                : 'text-gray-700 '
                            )}
                          >
                            Reset
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                              handleBrandFilter('Cannondale');
                            }}
                            className={classNames(
                              'block px-4  py-2 text-sm',
                              active
                                ? 'bg-pink-50 border-l-4 pl-3 border-transparent border-pink-500 text-pink-500 active:bg-sky-50 active:border-sky-300 active:text-sky-700'
                                : 'text-gray-700 '
                            )}
                          >
                            Cannondale
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                              handleBrandFilter('Cervelo');
                            }}
                            className={classNames(
                              'block px-4  py-2 text-sm',
                              active
                                ? 'bg-pink-50 border-l-4 pl-3 border-transparent border-pink-500 text-pink-500 active:bg-sky-50 active:border-sky-300 active:text-sky-700'
                                : 'text-gray-700 '
                            )}
                          >
                            Cervelo
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                              handleBrandFilter('Pinarello');
                            }}
                            className={classNames(
                              'block px-4  py-2 text-sm',
                              active
                                ? 'bg-pink-50 border-l-4 pl-3 border-transparent border-pink-500 text-pink-500 active:bg-sky-50 active:border-sky-300 active:text-sky-700'
                                : 'text-gray-700 '
                            )}
                          >
                            Pinarello
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="mb-8 shadow-md bg-white p-4 border border-gray-300 rounded-lg"
                >
                  <Link href={product.url}>
                    <h1 className="text-xl sm:text-xl lg:text-2xl xl:text-3xl pt-4 font-semibold text-slate-800">
                      {product.version}
                    </h1>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={300}
                      style={{ width: 'auto', height: 'auto' }}
                    />
                    <h2 className="text-md sm:text-xl   text-black font-semibold mb-2">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-sm mb-2">
                      {product.description}
                    </p>
                    <p className="text-gray-700 text-md   mb-2 hidden">
                      {product.about}
                    </p>
                    <p className="text-sky-600 text-sm font-bold mb-2">
                      ${product.price}
                    </p>
                    <p className="text-gray-700 hidden  mb-2">
                      Sizes:{' '}
                      {product.sizes.map((size, index) => (
                        <span key={index} className="hover:text-sky-600">
                          {size}
                          {index < product.sizes.length - 1 && ', '}
                        </span>
                      ))}
                    </p>

                    {/* Use next/image for images */}
                    <div className="rounded-md overflow-hidden"></div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import CerveloRoadbikes from '@/app/cervelo/page';
// import CannondaleRoadbikes from '@/app/cannondale/page';
// import PinarelloRoadbikes from '@/app/pinarello/page';
// import CerveloTriathlon from '@/app/triathlon/page';

// export default function AllBikes() {
//   return (
//     <>
//       <CerveloRoadbikes />
//       <CerveloTriathlon />
//       <PinarelloRoadbikes />
//       <CannondaleRoadbikes />
//     </>
//   );
// }

// {
//   /* <button
//           onClick={() => handleSortBy('highest')}
//           className={`bg-sky-500 text-white py-2 px-4 shadow-md rounded inline-block text-center text-sm font-semibold hover:bg-sky-600 active:bg-sky-400   active:border-sky-200 transition duration-300 ${
//             sortBy === 'highest' && 'font-bold'
//           }`}
//         >
//           Sort by Highest Price
//         </button>

//         <button
//           onClick={() => handleSortBy('lowest')}
//           className={`bg-sky-500 text-white py-2 px-4 shadow-md rounded inline-block text-center text-sm font-semibold hover:bg-sky-600 active:bg-sky-400   active:border-sky-200 transition duration-300 ${
//             sortBy === 'lowest' && 'font-bold'
//           }`}
//         >
//           Sort by Lowest Price
//         </button>

//         <button
//           onClick={handleResetSort}
//           className="bg-gray-500 ml-2 shadow-md text-white py-2 px-4 rounded inline-block text-center text-sm font-semibold hover:bg-gray-600 active:bg-gray-400 transition duration-300"
//         >
//           Reset
//         </button> */
// }
