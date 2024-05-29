function Hero() {
  return (
    <section className=" flex  min-h-screen items-center justify-center bg-primary-5 bg-main bg-cover bg-center text-white ">
      <div className=" px-12 text-center md:max-w-5xl">
        <h1 className="text-[3rem] font-bold uppercase lg:text-[4rem]">
          continue exploring
        </h1>
        <h3 className="mb-5">
          At Backroads Adventures, we believe that every journey is an
          opportunity for discovery. Our passionate team of explorers is
          dedicated to creating unforgettable experiences for adventurers of all
          levels. Whether you're seeking thrilling treks, serene hikes, or
          breathtaking vistas, we've got you
        </h3>

        <button className="border-2 bg-white px-6 py-4 text-xl font-semibold uppercase tracking-widest text-primary-4 shadow transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-white">
          Explore Tours
        </button>
      </div>
    </section>
  );
}

export default Hero;
