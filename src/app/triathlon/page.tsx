import React from 'react';
import Image from 'next/image';
import products from '@/components/triathlonbikeproductdata';

export default function Triathlon() {
  return (
    <>
      <section className=" bg-gray-50 rounded-md">
        <main className="flex justify-center items-center p-4">
          <div className="text-center">
            <h1 className="text-3xl text-black font-bold mb-4">
              Cervelo Triathlon Bikes
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="mb-8 shadow-md bg-white p-4 border border-gray-300 rounded-lg"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={300}
                    layout="responsive"
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
