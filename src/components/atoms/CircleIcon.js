// @flow
import * as React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

import {PRIMARY, DISABLE} from '_styles/colors';
import {scaleSize} from '_styles/mixins';

const defaultSize = 30;
const defaultBgColor = PRIMARY;

type Props = {
  children: React.Node,
  disabled?: boolean,
  size?: number,
  bgColor?: string,
  customStyle?: ViewStyle,
};

const CircleIcon = ({
  children,
  disabled = false,
  size = defaultSize,
  bgColor = defaultBgColor,
  customStyle,
}: Props) => {
  const styles: ViewStyle =
    size === 30 && bgColor === defaultBgColor
      ? styles30
      : getStylesForSize(size, bgColor);
  const style = disabled ? styles.circleDisabled : styles.circleActive;
  return <View style={[style, customStyle]}>{children}</View>;
};
// NOTE: should we use React.memo ?
export default CircleIcon;

const getStylesForSize = (val: number, clr: string) => {
  const size = scaleSize(val);
  const circle = {
    backgroundColor: clr,
    height: size,
    width: size,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: size / 2,
  };
  return {
    circleActive: {
      ...circle,
      backgroundColor: clr,
    },
    circleDisabled: {
      ...circle,
      backgroundColor: DISABLE,
    },
  };
};

const styles30 = StyleSheet.create(
  getStylesForSize(defaultSize, defaultBgColor),
);
