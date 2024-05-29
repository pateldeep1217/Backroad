import React from "react";
import aboutImg from "../assets/images/about.jpeg";
import SectionHeading from "./SectionHeading";

function AboutUs() {
  return (
    <section className="container mx-auto px-8 md:px-0 ">
      <SectionHeading title="about" subtitle="us" />
      <div className="relative min-w-0 flex-grow md:grid md:grid-cols-2 md:gap-5">
        {/* Container for the image */}
        <div className="image-container relative w-auto">
          {/* Apply the border to the container */}
          <div className="before:rounded-lg before:md:max-w-[630px] lg:before:absolute lg:before:left-[-1.5rem] lg:before:top-[-1.5rem] lg:before:h-full lg:before:w-full lg:before:border-[.5rem] lg:before:border-primary-5">
            <img
              src={aboutImg}
              className="relative z-40 h-full w-full rounded-lg border-primary-5 object-fill md:max-w-[630px]"
              alt="About Us"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-7 md:pt-0">
          <h3 className="text-2xl font-semibold lg:text-3xl">
            Discover Our Story
          </h3>
          <p>
            At BackRoads, we believe that every journey is an opportunity for
            discovery. Our passionate team of explorers is dedicated to creating
            unforgettable experiences for adventurers of all levels. Whether
            you're seeking thrilling treks, serene hikes, or breathtaking
            vistas, we've got you covered.
          </p>
          <p>
            Join us on a journey to explore the world's most captivating
            landscapes. Let's make memories together!
          </p>
          <button className="btn mt-2 w-fit border-0 bg-primary-5 px-4 py-2 uppercase tracking-[.3rem] text-white shadow outline-none transition-all duration-300 hover:bg-primary-7 hover:text-grey-1">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
