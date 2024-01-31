// SortFilter.tsx
import React, { useState, useEffect } from 'react';
import { Menu } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

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

interface SortFilterProps {
  products: Product[];
  setSortedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Highlowfilter: React.FC<SortFilterProps> = ({
  products,
  setSortedProducts,
}) => {
  const sortByPrice = (order: 'highest' | 'lowest'): Product[] => {
    const sortedProducts = [...products].sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/,/g, '')); // Convert string to numeric value
      const priceB = parseFloat(b.price.replace(/,/g, '')); // Convert string to numeric value

      return order === 'highest' ? priceB - priceA : priceA - priceB;
    });

    return sortedProducts;
  };

  const handleSortBy = (order: 'highest' | 'lowest') => {
    const sortedProducts = sortByPrice(order);
    console.log('Sorted Products:', sortedProducts);
    setSortedProducts(sortedProducts);
  };

  return (
    <div>
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
    </div>
  );
};

export default Highlowfilter;
