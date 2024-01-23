import React from 'react';
import Image from 'next/image';
import products from '@/components/roadbikedata/troycustomproductdata';
import Link from 'next/link';

export default function CannondaleRoadbikes() {
  const filteredProducts = products.filter((product) => product.id === 1);

  return (
    <>
      <section className="bg-gray-50">
        <main className="flex justify-center items-center p-4">
          <div className="text-center">
            <h1 className="text-3xl text-black hidden font-bold mb-4">
              {filteredProducts.length > 0 && filteredProducts[0].model}
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
                  <p className="text-sky-600 font-bold mb-2">
                    ${product.price}
                  </p>

                  <Link href="/order" passHref>
                    <p className="text-gray-700 mb-2">
                      Available Sizes:{' '}
                      {product.availablesizes.map((size, index) => (
                        <span key={index} className="hover:text-sky-600">
                          {size}
                          {index < product.availablesizes.length - 1 && ', '}
                        </span>
                      ))}
                    </p>
                  </Link>
                  <div>
                    <ul className="text-left capitalize">
                      <li>
                        <p className="text-gray-700 mb-2">
                          frame: {product.frame}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          shifters: {product.shifters}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          cassette: {product.cassette}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          chain: {product.chain}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          pedals: {product.pedals}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          tires: {product.tires}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          wheelset: {product.wheelset}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          front wheel: {product.front}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          rear wheel: {product.rear}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          fork: {product.fork}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          headset: {product.headset}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          frontDerailleur: {product.frontDerailleur}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          rearDerailleur: {product.rearDerailleur}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          crankset: {product.crank}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          bottomBracket: {product.bottomBracket}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          brakeCalipers: {product.brakes}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          stem: {product.stem}
                        </p>
                      </li>

                      <li>
                        <p className="text-gray-700 mb-2">
                          saddle: {product.saddle}
                        </p>
                      </li>
                    </ul>
                  </div>
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
