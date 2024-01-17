import React from 'react';
import Image from 'next/image';
import products from '@/components/roadbikeproductdata';
import Link from 'next/link';

export default function Roadbikes() {
  return (
    <>
      <section className=" bg-gray-50 ">
        <main className="flex justify-center items-center p-4">
          <div className="text-center ">
            <h1 className="text-4xl text-slate-700 font-semibold mb-4">
              Cervelo Road Bikes
            </h1>
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="mb-8 shadow-md bg-white p-4 border border-gray-300 rounded-lg"
                >
                  <Link href={product.url}>
                    <h1 className="text-3xl pt-4 font-semibold text-slate-800">
                      {product.version}
                    </h1>
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
                    <p className="text-gray-700 mb-2 hidden">{product.about}</p>
                    <p className="text-sky-600 font-bold mb-2">
                      ${product.price}
                    </p>
                    <p className="text-gray-700  mb-2">
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
