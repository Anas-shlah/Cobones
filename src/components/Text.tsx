import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import Colors from 'constants/Colors';

const aligns = {
  left: {textAlign: 'left'} as TextStyle,
  center: {textAlign: 'center'} as TextStyle,
  right: {textAlign: 'right'} as TextStyle,
  justify: {textAlign: 'justify'} as TextStyle,
  auto: {textAlign: 'auto'} as TextStyle,
};

const base: TextStyle = {
  fontWeight: '400',
  color: Colors.text,
};
const presets = {
  primary: [
    base,
    {
      fontWeight: '600',
      fontSize: 20,
    },
  ] as TextStyle,
  header: [
    base,
    {
      fontWeight: '700',
      fontSize: 24,
      lineHeight: 35,
    },
  ] as TextStyle,
  title: [
    base,
    {
      fontWeight: '700',
      fontSize: 20,
    },
  ] as TextStyle,
  secondary: {
    color: Colors.textSecondary,
    fontWeight: '300',
  } as TextStyle,
  description: {
    color: Colors.text,
    fontSize: 15,
  } as TextStyle,
  placeholder: [
    base,
    {
      color: Colors.textPlaceholder,
      fontWeight: '400',
    },
  ] as TextStyle,
};

type Presets = keyof typeof presets;
type Aligns = keyof typeof aligns;

export type TextProps = RNTextProps & {
  preset?: Presets;
  align?: Aligns;
};

function Text(props: TextProps) {
  const {style, preset = 'primary', ...otherTextProps} = props;
  const preferredPreset = presets[preset];
  const align = aligns[otherTextProps.align || 'auto'];
  const textStyle = [
    preferredPreset,
    align,
    style,
    preset !== 'header' && 16,
  ] as TextStyle;

  return <RNText {...otherTextProps} style={textStyle} />;
}
Text.defaultProps = {
  preset: 'primary',
  align: 'auto',
};
export {Text};
