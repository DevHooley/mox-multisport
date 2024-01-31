'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import products from '@/components/roadbikedata/roadbikedatamaster';
import Link from 'next/link';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

import Highlowfilter from '@/components/Filters/highlowfilter';

interface Product {
  id: number;
  groupset: string;
  brand: string;
  version: string;
  name: string;
  description: string;
  about: string;
  price: string;
  sizes: string[];
  image: string;
  url: string;
}

export default function CerveloRoadbikes() {
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedGroupset, setSelectedGroupset] = useState<string | null>(null);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([
    ...products,
  ]);
  const firstSectionRef = useRef(null);

  const handleResetSort = () => {
    console.log('Resetting');
    setSortBy(null);
    setSelectedBrand(null);
    setSelectedGroupset(null);
    setSortedProducts([...products]);
  };

  const filteredProducts = sortedProducts.filter((product) => {
    const isBrandMatch = !selectedBrand || product.brand === selectedBrand;
    const isGroupsetMatch =
      !selectedGroupset || product.groupset === selectedGroupset;

    return isBrandMatch && isGroupsetMatch;
  });

  const handleBrandFilter = (brand: string) => {
    console.log('Filtering by brand:', brand);
    setSelectedBrand(brand);
  };

  const handleGroupsetFilter = (groupset: string) => {
    console.log('Filtering by groupset:', groupset);
    setSelectedGroupset(groupset);
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

  return (
    <div className="absolute">
      <Menu as="div" className="  inline-block text-left">
        <Menu.Button className="inline-flex w-full justify-start gap-x-1.5 py-2 font-semibold items-center text-xl md:text-2xl lg:text-2xl px-2 border-transparent hover:text-pink-500 hover:border-b-2 hover:border-b-pink-500 active:border-b-2 active:border-sky-500 active:text-sky-500 pb-4 text-sky-600 whitespace-nowrap ">
          <AdjustmentsHorizontalIcon className="-ml-1 h-6 w-6 relative inline-flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-50 hover:text-gray-500" />
          Filters
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
                <a
                  onClick={handleResetSort}
                  className="block px-4 py-2 text-sm text-gray-700 bg-gray-50 border-l-4 pl-3 border-transparent border-pink-500 hover:text-pink-500 hover:bg-pink-50 hover:border-pink-300 active:text-sky-700 active:bg-sky-50 active:border-sky-300  active:border-bl-2"
                >
                  Reset
                </a>
              </Menu.Item>
              <Highlowfilter
                products={sortedProducts}
                setSortedProducts={setSortedProducts}
              />
              <Menu.Item>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedGroupset('Shimano');
                  }}
                  className={`block px-4 py-2 text-sm text-gray-700 bg-gray-50 border-l-4 pl-3 border-transparent border-pink-500 hover:text-pink-500 hover:bg-pink-50 hover:border-pink-300 active:text-sky-700 active:bg-sky-50 active:border-sky-300 active:border-bl-2`}
                >
                  Shimano
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedGroupset('Sram');
                  }}
                  className={`block px-4 py-2 text-sm text-gray-700 bg-gray-50 border-l-4 pl-3 border-transparent border-pink-500 hover:text-pink-500 hover:bg-pink-50 hover:border-pink-300 active:text-sky-700 active:bg-sky-50 active:border-sky-300 active:border-bl-2`}
                >
                  Sram
                </a>
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleBrandFilter('Cannondale');
                    }}
                    className={`block px-4 py-2 text-sm text-gray-700 bg-gray-50 border-l-4 pl-3 border-transparent border-pink-500 hover:text-pink-500 hover:bg-pink-50 hover:border-pink-300 active:text-sky-700 active:bg-sky-50 active:border-sky-300 active:border-bl-2`}
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
                    className={`block px-4 py-2 text-sm text-gray-700 bg-gray-50 border-l-4 pl-3 border-transparent border-pink-500 hover:text-pink-500 hover:bg-pink-50 hover:border-pink-300 active:text-sky-700 active:bg-sky-50 active:border-sky-300 active:border-bl-2`}
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
                    className={`block px-4 py-2 text-sm text-gray-700 bg-gray-50 border-l-4 pl-3 border-transparent border-pink-500 hover:text-pink-500 hover:bg-pink-50 hover:border-pink-300 active:text-sky-700 active:bg-sky-50 active:border-sky-300 active:border-bl-2`}
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
  );
}
