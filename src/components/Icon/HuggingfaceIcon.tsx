import {FC, memo} from "react";

import {IconProps} from "./Icon";

const HuggingfaceIcon: FC<IconProps> = memo((props) => (
  <svg
    className={props.className}
    fill="currentColor"
    style={{fontFamily: "sans-serif"}}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <text
      dominantBaseline="middle"
      fill="currentColor"
      fontSize="24"
      textAnchor="middle"
      x="50%"
      y="55%"
    >
      🤗
    </text>
  </svg>
));

export default HuggingfaceIcon;
