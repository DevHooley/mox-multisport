export default function Header() {
  return (
    <header className="flex flex-col items-center justify-between bg-sky-300 text-white p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12">
      <h1 className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4">
        Welcome to Mox Multisport
      </h1>
      <p className="sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl  text-center">
        Discover the passion for cycling at Mox Multisport, your premier
        destination for quality bicycles and accessories.
      </p>
    </header>
  );
}
