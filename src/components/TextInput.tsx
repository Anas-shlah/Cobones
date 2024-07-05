import {
  StyleProp,
  View,
  ViewStyle,
  TextInput as RNTextInput,
  TextInputProps as TextInputPropsBase,
} from 'react-native';
import Colors from 'constants/Colors';
import Layout from 'constants/Layout';
import React from 'react';
import {Text} from './Text';

const container = {
  backgroundColor: Colors.placeholder,
  height: Layout.button,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: Layout.spacing.sm,
  borderRadius: 8,
} as StyleProp<ViewStyle>;

const labelSection = {
  flexDirection: 'row',
  columnGap: Layout.spacing.sm,
  paddingVertical: Layout.spacing.sm,
  alignItems: 'center',
} as StyleProp<ViewStyle>;

export type TextInputProps = TextInputPropsBase & {
  containerStyle?: ViewStyle;
  wrapperStyle?: ViewStyle;
  styleMicIcon?: ViewStyle;
  labelIcon?: React.ReactNode;
  label?: string;
  isPhoneInput?: boolean;
  isDateInput?: boolean;
  unit?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
};

function TextInput(props: TextInputProps) {
  const {
    containerStyle,
    style,
    labelIcon,
    label,
    wrapperStyle,
    disabled,
    placeholder,
    unit,
    icon,
    ...otherTextProps
  } = props;
  const textInputStyle = [
    style,
    {
      fontSize: 18,
      paddingHorizontal: Layout.spacing.sm,
      flex: 1,
    },
  ];

  const hasLabel = typeof label === 'string';

  const {value, ...otherProps} = otherTextProps;

  return (
    <View style={wrapperStyle}>
      {hasLabel && (
        <View style={labelSection}>
          {labelIcon && labelIcon}
          {hasLabel && (
            <Text style={{fontWeight: '500', fontSize: 18}}>{label}</Text>
          )}
        </View>
      )}
      <View style={[container, containerStyle]}>
        <RNTextInput
          accessibilityLabel={label ?? placeholder}
          accessibilityHint={label ?? placeholder}
          accessibilityRole="text"
          style={textInputStyle}
          editable={!disabled}
          placeholder={placeholder ?? label}
          placeholderTextColor={Colors.textPlaceholder}
          {...otherTextProps}
        />
        {unit && (
          <View>
            <Text style={{fontWeight: '600', color: Colors.primary}}>
              {unit}
            </Text>
          </View>
        )}
        {icon && <View>{icon}</View>}
      </View>
    </View>
  );
}
TextInput.defaultProps = {
  containerStyle: undefined,
  labelIcon: undefined,
  label: undefined,
};
export {TextInput};
