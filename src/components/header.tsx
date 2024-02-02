'use client';

import Image from 'next/image';

function ContactComponent() {
  const handleDialClick = () => {
    window.location.href = 'tel:+13124669111';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:moxmultisport@gmail.com';
  };

  return (
    <div>
      <h2 className="">
        <a
          onClick={handleDialClick}
          className="text-gray-600 cursor-pointer leading-relaxed px-2"
        >
          Phone number: (312) 466-9111
        </a>
      </h2>
      <h2 className="text-gray-600 cursor-pointer leading-relaxed px-2">
        <a onClick={handleEmailClick}>
          Email: Troy Crady moxmultisport@gmail.com
        </a>
      </h2>
    </div>
  );
}

function AddressComponent() {
  return (
    <h2 className="pt-1 px-2">
      <a
        href="https://www.google.com/maps/place/Mox+Multisport/@41.884844,-87.6473919,17z/data=..."
        className="text-gray-600 leading-relaxed "
      >
        Address: 648 W Randolph St, Chicago, IL 60661
      </a>
    </h2>
  );
}

export default function Header() {
  return (
    <header className="bg-white py-0.5 sm:py-0.5 md:py-0.5 lg:py-0.5 xl:py-0.5 2xl:py-0.5">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="lg:w-3/4">
          {/* Existing content */}
          <div className="flex items-center justify-center mb-4">
            <a href="/" className="flex rounded-lg items-center mr-5">
              <Image
                className="rounded-lg"
                src="/MoxLogo.jpg"
                alt="Mox Multisport Logo"
                width={90}
                height={30}
                style={{ width: 'auto', height: 'auto' }}
              />
            </a>
            <h1 className="text-3xl pt-4 text-sky-500  sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 text-center">
              Mox Multisport
            </h1>
            {/* <h1 className="text-3xl pt-4 text-sky-500 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 text-center font-serif tracking-wide leading-tight text-shadow-md">
              Mox Multisport
            </h1> */}
          </div>
          <div className="justify-center items-center">
            <p className=" ml-5 text-gray-700  text-sm font-semibold pb-2 sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg text-center">
              Discover the passion for cycling at Mox Multisport, your premier
              destination for quality
              <br className="" /> bicycles and accessories.
            </p>
          </div>
        </div>

        {/* Render AddressComponent and ContactComponent only on lg and xl screens */}
        <div className="lg:w-1/4 lg:pl-4 hidden lg:inline xl:inline">
          <div className="flex flex-col justify-center mt-2 items-center">
            <h2 className="mt-4">
              <a
                href="https://www.google.com/maps/place/Mox+Multisport/@41.884844,-87.6473812,17z/data=!3m2!4b1!5s0x880e2cc593fa8991:0x5464abfea94a887e!4m6!3m5!1s0x880e2cc540e27dc3:0xda536ce40582cafe!8m2!3d41.884844!4d-87.6448116!16s%2Fg%2F1tdz5dpk?entry=ttu"
                className="text-gray-600 leading-relaxed pt-4"
              >
                Address: 648 W Randolph St, Chicago, IL 60661
              </a>
            </h2>
            <h2 className="text-gray-700 cursor-pointer leading-relaxed pt-4">
              <a href="mailto:moxmultisport@gmail.com">
                Email: Troy Crady - moxmultisport@gmail.com
              </a>
            </h2>
            <h2 className="mt-4">
              <a
                href="tel:+13124669111"
                className="text-gray-600 cursor-pointer leading-relaxed pt-4"
              >
                Phone number: (312) 466-9111
              </a>
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
}
