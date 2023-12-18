import * as React from "react";
import type { SVGProps } from "react";
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}>
    <path
      stroke="#2C2920"
      strokeLinejoin="bevel"
      d="M7.464 2.257C5.986.58 3.588.58 2.11 2.257.63 3.932.63 6.649 2.11 8.325L8 15l5.89-6.675c1.48-1.676 1.48-4.393 0-6.068-1.478-1.676-3.876-1.676-5.354 0L8 2.864z"
    />
  </svg>
);
export default SvgHeart;
