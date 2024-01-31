import Image from 'next/image';

export default function Banner() {
  return (
    <>
      <div className="py-0.5">
        <div className="mx-auto max-w-7xl shadow-sm bg-white px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 justify-center">
            <ul className="flex justify-center space-x-4 sm:space-x-6 lg:space-x-8 items-center text-black">
              <li className="p-2">
                <a
                  href="https://www.cervelo.com/en-US/bikes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/CerveloLogo.png" // replace with your image path
                    alt="Cervelo"
                    width={120} // adjust width based on your design
                    height={50} // adjust height based on your design
                  />
                </a>
              </li>
              <li className="p-2">
                <a
                  href="https://www.cannondale.com/en-us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/CannondaleLogo.png" // replace with your image path
                    alt="Cannondale-bicyles-logo"
                    width={120}
                    height={50}
                  />
                </a>
              </li>
              <li className="p-2">
                <a
                  href="https://pinarello.com/usa/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/Pinarello-Logo1.png" // replace with your image path
                    alt="Pinnarelo-logo"
                    width={110}
                    height={50}
                  />
                </a>
              </li>
              <li className="p-2">
                <a
                  href="https://www.lookcycle.com/us-en/products/bikes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/LookLogo.png" // replace with your image path
                    alt="Look-bicycles-logo"
                    width={80}
                    height={50}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
