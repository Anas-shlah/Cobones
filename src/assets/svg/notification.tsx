import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function NotificationIcon() {
  return (
    <Svg viewBox="0 0 24 24" height={24} width={24}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M20 18.667l.4.533a.5.5 0 01-.4.8H4a.5.5 0 01-.4-.8l.4-.533V10a8 8 0 1116 0v8.667zM9.5 21h5a2.5 2.5 0 11-5 0z" />
    </Svg>
  );
}
