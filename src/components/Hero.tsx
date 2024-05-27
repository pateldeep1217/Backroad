function Hero() {
  return (
    <section className=" md:bg-main  flex min-h-screen items-center justify-center bg-primary-5 bg-cover bg-center text-white ">
      <div className=" px-12 text-center md:max-w-full">
        <h1 className="text-[3rem] font-bold uppercase">continue exploring</h1>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>

        <button className="border-2 bg-white px-6 py-4 text-xl font-light uppercase tracking-widest text-primary-4 shadow transition-colors duration-300 ease-in-out hover:bg-primary-5 hover:text-white">
          Explore Tours
        </button>
      </div>
    </section>
  );
}

export default Hero;
