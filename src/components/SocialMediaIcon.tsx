import React from "react";
import { twMerge } from "tailwind-merge";

interface SocialMediaIconProps {
  icon: React.ReactNode;
  className?: string;
}

function SocialMediaIcon({ icon, className }: SocialMediaIconProps) {
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
