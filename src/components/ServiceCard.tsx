import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function ServiceCard({ icon, title, text }: ServiceCardProps) {
  return (
    <div className=" flex flex-col items-center justify-center gap-5  p-5 text-center ">
      {icon}
      <h4 className="text-lg">{title}</h4>
      <p className="text-grey-3">{text}</p>
    </div>
  );
}

export default ServiceCard;
