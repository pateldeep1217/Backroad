import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <h2 className=" text-center text-4xl font-bold uppercase  lg:text-5xl">
      {title} <span className="text-primary-5">{subtitle}</span>
    </h2>
  );
}

export default SectionHeading;
