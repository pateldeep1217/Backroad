import React from "react";
import aboutImg from "../assets/images/about.jpeg";
import SectionHeading from "./SectionHeading";

function AboutUs() {
  return (
    <section className="container mx-auto px-8 pb-32">
      <SectionHeading title="about" subtitle="us" />
      <div className="">
        <img src={aboutImg} className="rounded-lg " />
        <div className="flex flex-col gap-2 pt-7 ">
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
          <button className="btn mt-5 w-fit border-0 bg-primary-5 px-4  py-2 uppercase tracking-[.3rem] text-white shadow outline-none transition-all duration-300 hover:bg-primary-7 hover:text-grey-1">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
