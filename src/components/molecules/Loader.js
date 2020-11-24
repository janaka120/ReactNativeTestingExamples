import * as React from 'react';
import {ActivityIndicator, StyleSheet, View, Modal} from 'react-native';

import DefaultText from '_atoms/DefaultText';
import {PRIMARY, SECONDARY} from '_styles/colors';
import {scaleFontWithLineHeight} from '_styles/mixins';

const Loader = ({
  visible = false,
  text = 'Loading...',
  color = PRIMARY,
  testID = 'full-screen-loader',
}) => {
  return (
    <Modal
      testID={testID}
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {}}>
      <View style={styles.centeredView}>
        <View style={styles.modalView} opacity={0.8}>
          <ActivityIndicator size="large" color={color} />
          <DefaultText text={text} customStyle={styles.text} />
        </View>
      </View>
    </Modal>
  );
};
export default Loader;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: SECONDARY,
  },
  text: {
    ...scaleFontWithLineHeight(14),
    color: '#fff',
  },
});
