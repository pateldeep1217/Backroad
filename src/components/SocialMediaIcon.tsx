import React from "react";
import { twMerge } from "tailwind-merge";

function SocialMediaIcon({ icon, className }) {
  return (
    <div
      className={twMerge(
        "cursor-pointer text-primary-5 hover:text-primary-7",
        className,
      )}
    >
      {icon}
    </div>
  );
}

export default SocialMediaIcon;
