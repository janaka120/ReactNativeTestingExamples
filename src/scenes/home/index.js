import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import ItemAdder from '_scenes/home/components/ItemAdder';
import ItemsList from '_scenes/home/ItemList';
import {scaleWidth} from '_styles/mixins';

const HomeScreen = () => {
  const [items, setItems] = useState([]);
  return (
    <SafeAreaView style={styles.root}>
      <ItemAdder
        onAddItem={item => {
          if (item.trim().length > 0 && !items.includes(item)) {
            setItems([...items, item]);
          }
        }}
        testID="adder"
      />
      <ItemsList
        data={items}
        onDeleteItem={item => {
          const index = items.indexOf(item);
          setItems([
            ...items.slice(0, index),
            ...items.slice(index + 1, items.length),
          ]);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: scaleWidth(10),
  },
});

export default HomeScreen;
