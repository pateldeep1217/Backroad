import React from "react";
import aboutImg from "../assets/images/about.jpeg";
import SectionHeading from "./SectionHeading";

function AboutUs() {
  return (
    <section className="container mx-auto px-8 pb-32 md:px-0">
      <SectionHeading title="about" subtitle="us" />
      <div className="relative md:grid md:grid-cols-2 md:gap-5">
        {/* Container for the image */}
        <div className="relative w-auto">
          {/* Apply the border to the container */}
          <div className="lg:before:absolute lg:before:left-[-1.5rem] lg:before:top-[-1.5rem] lg:before:h-full lg:before:w-full lg:before:border-[.5rem] lg:before:border-primary-5">
            <img
              src={aboutImg}
              className="relative z-50 h-full w-full rounded-lg border-primary-5 object-fill"
              alt="About Us"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-7 md:pt-0">
          <h3 className="text-2xl font-semibold">Explore The Difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <button className="btn mt-2 w-fit border-0 bg-primary-5 px-4 py-2 uppercase tracking-[.3rem] text-white shadow outline-none transition-all duration-300 hover:bg-primary-7 hover:text-grey-1">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
