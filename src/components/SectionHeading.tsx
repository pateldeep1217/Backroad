import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <h2 className="mb-16 mt-[5rem] text-center text-3xl font-bold uppercase">
      {title} <span className="text-primary-5">{subtitle}</span>
    </h2>
  );
}

export default SectionHeading;
