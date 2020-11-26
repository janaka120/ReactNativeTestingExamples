import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import SubmitButton from '_components/molecules/SubmitButton';
import DefaultText from '_components/atoms/DefaultText';
import Loader from '_molecules/Loader';

import {PRIMARY} from '_styles/colors';
import {scaleWidth, scaleFontWithLineHeight} from '_styles/mixins';

const LoginScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const onSubmit = () => {
    setLoading(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading && navigation && navigation.navigate) {
        setLoading(false);
        navigation.navigate('App');
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [loading, navigation]);

  return (
    <>
      <SafeAreaView style={styles.con}>
        <DefaultText text="React Native Testing Examples" customStyle={styles.title} />
        <DefaultText
          customStyle={styles.infoText}
          text="This sample application helps to get some idea about React Native testing."
        />
        <SubmitButton title={'Login'} onPress={onSubmit} disabled={false} />
      </SafeAreaView>
      <Loader visible={loading} />
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: scaleWidth(10),
  },
  title: {
    ...scaleFontWithLineHeight(22),
    color: PRIMARY,
    fontWeight: 'bold',
  },
  infoText: {
    textAlign: 'center',
  },
});
