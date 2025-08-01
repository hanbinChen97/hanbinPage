import {FC, memo} from "react";
import {FaGitlab} from "react-icons/fa";

import {IconProps} from "./Icon";

const GitLabIcon: FC<IconProps> = memo((props) => (
  <svg
    className={props.className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <FaGitlab size={24} />
  </svg>
));

export default GitLabIcon;
