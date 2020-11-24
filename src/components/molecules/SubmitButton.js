// @flow
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {PRIMARY, DISABLE} from '_styles/colors';
import {scaleWidth, scaleFontWithLineHeight, scaleHeight} from '_styles/mixins';

type Props = {
  title: string,
  onPress: () => void,
  disabled?: boolean,
  customStyle?: {},
  customTextStyle?: any,
  testID?: string,
};

const SubmitButton = ({
  title,
  disabled,
  customStyle,
  onPress,
  customTextStyle,
  testID,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      testID={testID || ''}
      style={[disabled ? styles.btnDisabled : styles.btnActive, customStyle]}>
      <Text style={[styles.lbl, customTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default SubmitButton;

// design reference: personal details
const height = scaleHeight(42);
const btnActive = {
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: scaleWidth(46),
  backgroundColor: PRIMARY,
  height,
  borderRadius: height / 2,
};
const styles = StyleSheet.create({
  btnActive,
  btnDisabled: {
    ...btnActive,
    backgroundColor: DISABLE,
  },
  lbl: {
    ...scaleFontWithLineHeight(18),
    color: 'white',
  },
});
