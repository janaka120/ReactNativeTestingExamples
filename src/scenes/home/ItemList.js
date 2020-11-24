import React from 'react';
import {FlatListProps, Text, View, StyleSheet, Button} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import DeleteButton from '_components/molecules/SubmitButton';
import DefaultText from '_components/atoms/DefaultText';

import {scaleWidth, scaleFontWithLineHeight, scaleHeight} from '_styles/mixins';
import {PRIMARY, DISABLE} from '_styles/colors';

interface Props extends Omit<FlatListProps<string>, 'renderItem'> {
  onDeleteItem: (item: string) => void;
}

const Item = ({
  value,
  onDeleteItem,
}: {
  value: string,
  onDeleteItem: (item: string) => void,
}) => (
  <View style={styles.itemContainer}>
    <DefaultText text={value} customStyle={styles.item} />
    <DeleteButton
      title={'x'}
      disabled={false}
      testID="cell-delete"
      onPress={() => {
        onDeleteItem(value);
      }}
      customStyle={styles.deleteBtn}
    />
  </View>
);

export default (props: Props) => {
  const {data, onDeleteItem} = props;
  return (
    <FlatList
      testID="list"
      keyExtractor={i => i}
      data={data}
      renderItem={({item}) => <Item value={item} onDeleteItem={onDeleteItem} />}
    />
  );
};

const deleteBtnHeight = scaleHeight(35);
const styles = StyleSheet.create({
  itemContainer: {
    borderColor: DISABLE,
    borderWidth: StyleSheet.hairlineWidth,
    height: 45,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: scaleWidth(10),
    borderRadius: 8,
    marginBottom: scaleHeight(10),
  },
  item: {
    ...scaleFontWithLineHeight(18),
  },
  deleteBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY,
    height: deleteBtnHeight,
    width: deleteBtnHeight,
    borderRadius: deleteBtnHeight / 2,
    paddingHorizontal: scaleWidth(5),
    textAlign: 'center',
    paddingBottom: scaleHeight(5),
  },
});
