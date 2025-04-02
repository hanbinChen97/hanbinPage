import {FC, memo} from 'react';
import {FaLinkedin} from 'react-icons/fa';

import {IconProps} from './Icon';

const LinkedInIcon: FC<IconProps> = memo(props => (
  <svg
    className={props.className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <FaLinkedin size={24} />
  </svg>
));

export default LinkedInIcon;
