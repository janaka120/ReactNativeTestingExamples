// @flow
import * as React from 'react';
import {Text, StyleSheet} from 'react-native';

import {scaleFontWithLineHeight} from '_styles/mixins';
import {SECONDARY} from '_styles/colors';

type Props = {
  customStyle?: {},
  text: string,
};
const DefaultText = ({customStyle, text}: Props) => {
  return (
    <Text
      multiline={true}
      numberOfLines={5}
      style={[styles.textStyle, customStyle]}>
      {text}
    </Text>
  );
};
export default DefaultText;

const styles = StyleSheet.create({
  textStyle: {
    ...scaleFontWithLineHeight(16),
    color: SECONDARY,
  },
});
