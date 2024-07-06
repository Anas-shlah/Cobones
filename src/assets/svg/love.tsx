import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function LoveIcon() {
  return (
    <Svg
      id="Layer_1"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      enableBackground="new 0 0 24 24"
      height="20px"
      width="20px"
    >
      <Path
        d="M23.3 8.6c0 5.2-7.7 10.6-10.3 12.4-.6.4-1.3.4-1.8 0C8.4 19.3.8 13.8.8 8.6c0-3.3 2.6-5.9 5.9-5.9 2.4 0 4.4 1.4 5.4 3.4.9-2 3-3.4 5.4-3.4 3.1 0 5.8 2.7 5.8 5.9z"
        fill="none"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
    </Svg>
  );
}
