import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import Colors from '../../constants/Colors';

export default function SendIcon({style = null}) {
  return (
    <Svg
      viewBox="0 0 32 32"
      height={20}
      width={20}
      style={{padding: 10, borderRadius: 50, backgroundColor: Colors.primary}}
    >
      <Path
        d="M27.71 4.29a1 1 0 00-1.05-.23l-22 8a1 1 0 000 1.87l8.59 3.43L19.59 11 21 12.41l-6.37 6.37 3.44 8.59A1 1 0 0019 28a1 1 0 00.92-.66l8-22a1 1 0 00-.21-1.05z"
        fill="#fff"
        className="fill-000000"
      />
      <Path
        data-name="&lt;Transparent Rectangle&gt;"
        d="M0 0h32v32H0z"
        fill="none"
      />
    </Svg>
  );
}
