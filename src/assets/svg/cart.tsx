import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function CartIcon() {
  return (
    <Svg height="20px" viewBox="0 0 20 20" width="20px">
      <Path
        d="M6 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM0 0v2h2l3.6 7.6L4.2 12c-.1.3-.2.7-.2 1 0 1.1.9 2 2 2h12v-2H6.4c-.1 0-.2-.1-.2-.2v-.1l.9-1.7h7.4c.8 0 1.4-.4 1.7-1l3.6-6.5c.2-.2.2-.3.2-.5 0-.6-.4-1-1-1H4.2l-.9-2H0zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        transform="translate(-212 -422) translate(212 422)"
        fill="#000"
        fillRule="evenodd"
        stroke="none"
        strokeWidth={1}
      />
    </Svg>
  );
}
