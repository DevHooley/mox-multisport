export default function Home() {
  return (
    <>
      <div>
        <div>
          <div>
            <header className="flex flex-col items-center justify-between bg-sky-300 text-white p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to Mox Multisport
              </h1>
              <p className="text-lg mb-8">
                Discover the passion for cycling at Mox Multisport, your premier
                destination for quality bicycles and accessories.
              </p>
            </header>
            <section className="container mx-auto mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Information about the store */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-black mb-4">
                    Our Story
                  </h2>
                  <p className="text-black">
                    Mox Multisport started with a vision to provide the best
                    cycling experience to enthusiasts of all levels. With a
                    passion for quality and innovation, we curate a collection
                    of top-notch bicycles and accessories.
                  </p>
                </div>

                {/* Meet the team */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl text-black font-semibold mb-4">
                    Meet Our Team
                  </h2>
                  <p className="text-black">
                    Our dedicated team of cycling enthusiasts is here to assist
                    you in finding the perfect bike and accessories. We believe
                    in fostering a community that shares a love for cycling and
                    an active lifestyle.
                  </p>
                </div>

                {/* Featured products */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl text-black font-semibold mb-4">
                    Featured Products
                  </h2>
                  {/* Add featured product images or a product carousel */}
                  <p className="text-black">
                    Explore our handpicked selection of high-performance
                    bicycles and gear.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
