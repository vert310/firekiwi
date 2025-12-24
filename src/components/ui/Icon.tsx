import React from "react";

interface IconProps {
  name: "arrow-right" | "camera" | "sparkles" | "check" | "logo";
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = "", size = 20 }) => {
  const icons = {
    "arrow-right": (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M7.5 15L12.5 10L7.5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    camera: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M17.5 6.25H14.375L13.125 4.375H6.875L5.625 6.25H2.5C1.875 6.25 1.25 6.875 1.25 7.5V15C1.25 15.625 1.875 16.25 2.5 16.25H17.5C18.125 16.25 18.75 15.625 18.75 15V7.5C18.75 6.875 18.125 6.25 17.5 6.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="11.25" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    sparkles: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M10 2.5V5M10 15V17.5M17.5 10H15M5 10H2.5M14.773 5.227L13.182 6.818M6.818 13.182L5.227 14.773M14.773 14.773L13.182 13.182M6.818 6.818L5.227 5.227"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="10" cy="10" r="2" fill="currentColor" />
      </svg>
    ),
    check: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M16.25 5L7.5 13.75L3.75 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    logo: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="18" fill="#D7FF3C" />
        <path
          d="M 20 8 Q 12 12 8 20 Q 12 28 20 32 Q 28 28 32 20 Q 28 12 20 8"
          fill="#0B0B0D"
        />
        <circle cx="20" cy="20" r="6" fill="#D7FF3C" />
      </svg>
    ),
  };

  return icons[name] || null;
};

