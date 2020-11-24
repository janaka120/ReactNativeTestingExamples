import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import AddButton from '_components/molecules/SubmitButton';

import {scaleWidth, scaleHeight} from '_styles/mixins';
import {PRIMARY_SUCCESS, SECONDARY_PRIMARY} from '_styles/colors';

interface Props {
  testID: string;
  onAddItem: (item: string) => void;
}

export default (props: Props) => {
  const [input, setInput] = useState('');
  const {testID, onAddItem} = props;
  return (
    <View style={styles.root}>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Add Item..."
        style={styles.input}
        testID={`${testID}-input`}
      />
      <AddButton
        title={'+'}
        disabled={false}
        onPress={() => {
          onAddItem(input);
          setInput('');
        }}
        customStyle={styles.addBtn}
        testID="add-btn"
      />
    </View>
  );
};

const addBtnHeight = scaleHeight(35);
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    backgroundColor: SECONDARY_PRIMARY,
    borderRadius: 30,
    paddingHorizontal: scaleWidth(15),
    alignItems: 'center',
    marginVertical: scaleHeight(15),
  },
  input: {
    flex: 1,
    marginRight: scaleWidth(8),
  },
  addBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_SUCCESS,
    height: addBtnHeight,
    width: addBtnHeight,
    borderRadius: addBtnHeight / 2,
    paddingHorizontal: scaleWidth(5),
  },
});
