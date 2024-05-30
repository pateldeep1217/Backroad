import React from "react";
import tour1 from "../assets/images/tour-1.jpeg";
import tour2 from "../assets/images/tour-2.jpeg";
import tour3 from "../assets/images/tour-3.jpeg";
import tour4 from "../assets/images/tour-4.jpeg";
import { IconMap } from "@tabler/icons-react";

const TourCard = () => {
  return (
    <div className="">
      <div className="relative border">
        <img src={tour1} alt="tibet" className="h-60 w-full object-cover" />
        <span className="absolute bottom-0 right-0 bg-primary-7 px-2 py-2">
          August 26th, 2020
        </span>
      </div>
      <div className="space-y-4 bg-grey-10 p-5">
        <h4 className="font-bold">Tibet Adventure</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </p>
        <div className="flex justify-between text-primary-5">
          <div className="flex gap-2">
            <IconMap />
            <span>China</span>
          </div>
          <span>6 Days</span>
          <span>From $2100</span>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
