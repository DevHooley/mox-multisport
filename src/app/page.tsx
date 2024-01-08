export default function Home() {
  return (
    <>
      <div>
        <div>
          <div>
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
