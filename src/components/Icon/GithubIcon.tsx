import {FC, memo} from 'react';
import {FaGithub} from 'react-icons/fa';

import {IconProps} from './Icon';

const GithubIcon: FC<IconProps> = memo(props => (
  <svg
    className={props.className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <FaGithub size={24} />
  </svg>
));

export default GithubIcon;
