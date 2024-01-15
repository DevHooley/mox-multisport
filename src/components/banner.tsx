import Image from 'next/image';

export default function Banner() {
  return (
    <>
      <div className="py-1">
        <div className="mx-auto max-w-7xl shadow-sm rounded-sm bg-white px-4 sm:px-6 lg:px-8">
          <div className="flex h-8 justify-center">
            <ul className="flex justify-center space-x-4 sm:space-x-6 lg:space-x-8 items-center text-black">
              <li className="p-2">
                <Image
                  src="/CerveloLogo.png" // replace with your image path
                  alt="Cervelo"
                  width={120} // adjust width based on your design
                  height={50} // adjust height based on your design
                />
              </li>
              <li className="p-2">
                <Image
                  src="/CannondaleLogo.png" // replace with your image path
                  alt="Cannondale"
                  width={120}
                  height={50}
                />
              </li>
              <li className="p-2">
                <Image
                  src="/Pinarello-Logo1.png" // replace with your image path
                  alt="Pinnarelo"
                  width={110}
                  height={50}
                />
              </li>
              <li className="p-2">
                <Image
                  src="/LookLogo.png" // replace with your image path
                  alt="Look"
                  width={80}
                  height={50}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
