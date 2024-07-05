import {
  ActivityIndicator,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import Colors from 'constants/Colors';
import {Text, TextProps} from './Text';
import Layout from 'constants/Layout';
import React from 'react';

const base: StyleProp<ViewStyle> = {
  flexDirection: 'row',
  height: Layout.button,
  paddingVertical: Layout.spacing.sm,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.primary,
};
const presets = {
  outline_blue: [
    base,
    {
      borderWidth: 2,
      borderColor: Colors.primary,
      backgroundColor: 'transparent',
      height: 55,
      justifyContent: 'center',
    },
  ],
  link: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  } as StyleProp<ViewStyle>,
  outline: [
    base,
    {
      borderWidth: 2,
      borderColor: Colors.secondary,
      backgroundColor: 'transparent',
    },
  ] as StyleProp<ViewStyle>,
  primary: base as StyleProp<ViewStyle>,
  secondary: [
    base,
    {backgroundColor: Colors.secondary},
  ] as StyleProp<ViewStyle>,
  disabled: [
    base,
    {backgroundColor: Colors.textDisabled},
  ] as StyleProp<ViewStyle>,
};
export const roundeds = {
  none: {borderRadius: 0} as StyleProp<ViewStyle>,
  light: {borderRadius: 5} as StyleProp<ViewStyle>,
  normal: {borderRadius: 10} as StyleProp<ViewStyle>,
  medium: {borderRadius: 17} as StyleProp<ViewStyle>,
  huge: {borderRadius: 56} as StyleProp<ViewStyle>,
};
const textColors = {
  link: [{color: Colors.secondary}] as StyleProp<TextStyle>,
  outline: [{color: Colors.secondary}] as StyleProp<TextStyle>,
  primary: [{color: Colors.whiteText}] as StyleProp<TextStyle>,
  secondary: [
    {color: Colors.whiteText, fontWeight: '700'},
  ] as StyleProp<TextStyle>,
  disabled: [{color: '#fff'}] as StyleProp<TextStyle>,
};
type Presets = keyof typeof presets;
type Roundeds = keyof typeof roundeds;

type ButtonProps = TouchableOpacityProps & {
  preset?: Presets;
  rounded?: Roundeds;
  title: string;
  textProps?: TextProps;
  right?: React.ReactNode;
  loading?: boolean;
};

function Button(props: ButtonProps) {
  const {
    style,
    children,
    title,
    textProps,
    preset,
    right,
    loading,
    onPress,
    ...otherTouchableProps
  } = props;
  const isDisabled = otherTouchableProps.disabled || preset === 'disabled';
  const presetStyle = presets[isDisabled ? 'disabled' : preset || 'primary'];
  const round = roundeds[otherTouchableProps.rounded || 'normal'];
  const textColor = [
    textColors[preset || 'primary'],
    isDisabled && textColors.disabled,
  ] as TextStyle;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityHint={title}
      {...otherTouchableProps}
      disabled={isDisabled}
      onPress={onPress}
      style={[
        presetStyle,
        round,
        {paddingHorizontal: Layout.spacing.lg, alignItems: 'center'},
        style,
      ]}
    >
      {loading && (
        <ActivityIndicator animating color={Colors.secondary} size="small" />
      )}
      {children && !loading && children}
      {!loading && (
        <Text
          style={[textColor, {fontSize: 20}]}
          preset="primary"
          {...textProps}
        >
          {title}
        </Text>
      )}
      {right && !loading && right}
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  preset: 'primary',
  rounded: 'normal',
  textProps: {
    preset: 'primary',
  },
  right: undefined,
  loading: false,
};

export {Button};
