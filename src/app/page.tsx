'use client';

import React from 'react';
import Image from 'next/image';

function ImageComponent() {
  return (
    <div className="rounded-lg overflow-hidden">
      <Image
        src="/Images/frontofstore2.jpg"
        alt="Chicago Road Bikes and Triathlon Bikes - Mox Multisport"
        width={400}
        height={300}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

function AddressComponent() {
  return (
    <h2 className="mt-4">
      <a
        href="https://www.google.com/maps/place/Mox+Multisport/@41.884844,-87.6473919,17z/data=..."
        className="text-gray-600 leading-relaxed pt-4"
      >
        Address - 648 W Randolph St, Chicago, IL 60661
      </a>
    </h2>
  );
}

function ContactComponent() {
  const handleDialClick = () => {
    window.location.href = 'tel:+13124669111';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:moxmultisport@gmail.com';
  };

  return (
    <div>
      <h2 className="mt-4">
        <a
          onClick={handleDialClick}
          className="text-gray-600 cursor-pointer leading-relaxed pt-4"
        >
          Phone number - (312) 466-9111
        </a>
      </h2>
      <h2 className="text-gray-600 cursor-pointer leading-relaxed pt-4">
        <a onClick={handleEmailClick}>
          Email: Troy Crady - moxmultisport@gmail.com
        </a>
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="flex items-center justify-center">
        <div className="max-w-7xl mx-auto p-8 md:p-16 bg-white shadow-md rounded-lg">
          <header className="text-2xl md:text-3xl lg:text-4xl font-bold pb-6 mb-6 text-gray-800 text-center">
            We are a full-service bicycle shop located in the heart of chicago&apos;s
            West Loop
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImageComponent />
            <div>
              <p className="text-gray-600 leading-relaxed pt-4">
                At our bicycle shop, we live and breathe cycling. Committed to
                serving our community, we take pride in offering top-notch
                bicycles and accessories. Whether you&apos;re a leisurely rider or a
                seasoned cyclist, we&apos;ve got the perfect bike waiting for you.
                Our team of dedicated experts is ready to guide you in
                discovering the ideal bike and gear to elevate your cycling
                journey. From casual rides to professional races, we&apos;re here to
                enhance your cycling experience at every turn.
              </p>
              <p className="text-gray-600 leading-relaxed pt-4">
                Visit us today to explore our wide selection of bikes, from road
                bikes to triathlon bikes and custom builds. We pride ourselves
                on delivering excellent customer service and ensuring that every
                rider finds the perfect fit. Join us on the journey to
                discovering the joy of cycling!
              </p>
              <AddressComponent />
              <ContactComponent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
