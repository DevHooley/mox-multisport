import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="bg-gray-50 flex items-center justify-center">
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Welcome to our Bicycle Shop
          </h1>

          <div className="w-1/2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/Images/frontofstore2.jpg"
                alt="About Us"
                layout="responsive"
                width={400} // Adjusted width for a smaller image
                height={300} // Adjusted height for a smaller image
              />
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed pt-4">
            At our bicycle shop, we are passionate about cycling and dedicated
            to providing high-quality bicycles and accessories to our community.
            Whether your a casual rider or a seasoned cyclist, we have the
            perfect bike for you. Our team of experts is here to help you find
            the ideal bike and gear to enhance your cycling experience.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Visit us today to explore our wide selection of bikes, from road
            bikes to triathlon bikes and custom builds. We pride ourselves on
            delivering excellent customer service and ensuring that every rider
            finds the perfect fit. Join us on the journey to discovering the joy
            of cycling!
          </p>
        </div>
      </section>
    </>
  );
}
