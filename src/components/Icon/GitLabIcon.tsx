import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const GitLabIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      d="M64 130L108 50H20L64 130Z"
      fill="currentColor"
    />
    <path
      d="M20 50L14 15C13.4 13 11.6 13 11 15L1 50H20Z"
      fill="currentColor"
    />
    <path
      d="M1 50L64 130L16 50H1Z"
      fill="currentColor"
    />
    <path
      d="M108 50L114 15C114.6 13 116.4 13 117 15L127 50H108Z"
      fill="currentColor"
    />
    <path
      d="M127 50L64 130L112 50H127Z"
      fill="currentColor"
    />
  </Icon>
));

export default GitLabIcon;