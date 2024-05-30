import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function ServiceCard({ icon, title, text }: ServiceCardProps) {
  return (
    <div className=" shadow-m  mx-5 flex flex-col  items-center justify-center gap-5  rounded-md border-b-8 border-primary-5 bg-primary-1 p-5 text-center text-grey-10 sm:mx-0">
      <span className=" rounded-full  bg-grey-10 p-3 text-grey-1">{icon}</span>
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-grey-7">{text}</p>
    </div>
  );
}

export default ServiceCard;
