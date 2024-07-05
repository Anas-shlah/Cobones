import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function SearchIcon() {
  return (
    <Svg height="32px" viewBox="0 0 32 32" width="32px">
      <Path
        d="M19.427 21.427a8.5 8.5 0 112-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 01-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
        fill="#929292"
        fillRule="evenodd"
        stroke="none"
        strokeWidth={1}
      />
    </Svg>
  );
}