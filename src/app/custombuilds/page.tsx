import React from 'react';
import Image from 'next/image';
// import products from '@/components/triathlonbikeproductdata';
import products from '@/components/custombikeproductdata';

export default function troyspecial() {
  return (
    <>
      <section className=" bg-gray-50 rounded-sm">
        <main className="flex justify-center items-center p-4">
          <div className="text-center">
            <h1 className="text-3xl text-black font-bold mb-4">
              Custom Bike Build
            </h1>
            <div className="">
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
                  <h2 className="text-xl p-4 text-black font-semibold mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 items-center justify-center  text-xl mb-2">
                    {product.description}
                  </p>

                  <div>
                    <ul className="text-left capitalize">
                      <li>
                        <p className="text-gray-700 mb-2">
                          aeroBasebar: {product.aeroBasebar}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          brakeLevers: {product.brakeLevers}
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
                          wheelFront: {product.wheelFront}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          wheelRear: {product.wheelRear}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          frameMaterial: {product.frameMaterial}
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
                          seatpost: {product.seatpost}
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
                          crankset: {product.crankset}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          bottomBracket: {product.bottomBracket}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          brakeCalipers: {product.brakeCalipers}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          stem: {product.stem}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          aeroClipOnBar: {product.aeroClipOnBar}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-700 mb-2">
                          saddle: {product.saddle}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <p className="text-green-700 font-bold mb-2">
                    Call for pricing
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
