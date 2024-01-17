
import React from 'react';
import Image from 'next/image';
import products from '@/components/triathlonbikeproductdata';

export default function r5Duraace() {
  // Filter products to include only the one with id 1
  const filteredProducts = products.filter((product) => product.id === 4);

  return (
    <>
      <section className="bg-gray-50">
        <main className="flex justify-center items-center p-4">
          <div className="text-center">
            <h1 className="text-3xl text-black font-bold mb-4">
              Cervelo Caledonia 5
            </h1>

            <div className="grid max-w-[600px] grid-cols-1">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="mb-8 shadow-md bg-white p-4 border border-gray-300 rounded-lg"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={300}
                    style={{ width: 'auto', height: 'auto' }}
                  />
                  <h2 className="text-xl text-black font-semibold mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-gray-700 mb-2">{product.about}</p>
                  <p className="text-green-700 font-bold mb-2">
                    ${product.price}
                  </p>
                  <p className="text-gray-700 mb-2">
                    Sizes: {product.sizes.join(', ')}
                  </p>
                  {/* Use next/image for images */}
                  <div className="rounded-md overflow-hidden"></div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
