import React from "react";
import { IconMap } from "@tabler/icons-react";

interface TourCardProps {
  imageSrc: string;
  date: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  price: string;
}

const TourCard = ({
  imageSrc,
  date,
  title,
  description,
  location,
  duration,
  price,
}: TourCardProps) => {
  return (
    <div className="">
      <div className="relative border">
        <img src={imageSrc} alt={title} className="h-60 w-full object-cover" />
        <span className="absolute bottom-0 right-0 bg-primary-7 px-2 py-2">
          {date}
        </span>
      </div>
      <div className="space-y-4 bg-grey-10 p-5">
        <h4 className="font-bold">{title}</h4>
        <p>{description}</p>
        <div className="flex justify-between text-primary-5">
          <div className="flex gap-2">
            <IconMap />
            <span>{location}</span>
          </div>
          <span>{duration}</span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
