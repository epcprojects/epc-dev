import React from "react";

const KotlinIcon = ({width="20",height="20"}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_259_2296)">
        <path
          d="M20 20H0V0H20L9.793 9.855L20 20Z"
          fill="url(#paint0_radial_259_2296)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_259_2296"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(19.335 0.821999) scale(22.9097)"
        >
          <stop offset="0.003" stopColor="#EF4857" />
          <stop offset="0.469" stopColor="#D211EC" />
          <stop offset="1" stopColor="#7F52FF" />
        </radialGradient>
        <clipPath id="clip0_259_2296">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default KotlinIcon;
