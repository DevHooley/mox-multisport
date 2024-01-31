'use client';

import React from 'react';
import Image from 'next/image';
import AddressComponent from '@/components/address';
import ContactComponent from '@/components/contact';
import CustomMenu from '@/components/custommenu';

function ImageComponent() {
  return (
    <div className="flex items-center justify-center">
      <div className="rounded-sm overflow-hidden">
        <Image
          src="/Images/frontofstore2.jpg"
          alt="Chicago Road Bikes and Triathlon Bikes - Mox Multisport"
          width={600}
          height={1200}
          className="object-cover w-full h-auto "
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="flex items-center justify-center">
        <div className="max-w-7xl mx-auto py-0.5 md:py-0.5 bg-white shadow-md rounded-sm">
          <header className="text-2xl max-w-6xl md:text-3xl lg:text-4xl font-bold pt-6 mb-6 text-gray-800 text-center">
            We are a full-service bicycle shop located in the heart of
            Chicago&apos;s West Loop
          </header>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <ImageComponent />
              <div className="pt-5 lg:p-10">
                <p className="text-gray-700 leading-relaxed p-5 pt-4">
                  At our bicycle shop, we live and breathe cycling. Committed to
                  serving our community, we take pride in offering top-notch
                  bicycles and accessories. Whether you&apos;re a leisurely
                  rider or a seasoned cyclist, we&apos;ve got the perfect bike
                  waiting for you. Our team of dedicated experts is ready to
                  guide you in discovering the ideal bike and gear to elevate
                  your cycling journey. From casual rides to professional races,
                  we&apos;re here to enhance your cycling experience at every
                  turn.
                </p>
                <p className="text-gray-700 leading-relaxed p-5 pt-4">
                  Visit us today to explore our wide selection of bikes, from
                  road bikes to triathlon bikes and custom builds. We pride
                  ourselves on delivering excellent customer service and
                  ensuring that every rider finds the perfect fit. Join us on
                  the journey to discovering the joy of cycling!
                </p>
                <div className="p-5">
                  <AddressComponent />
                  <ContactComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
