import React, {useState} from 'react';
import {TextInput, StyleSheet, SafeAreaView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import DefaultText from '_components/atoms/DefaultText';
import Loader from '_molecules/Loader';
import {registerUser, showLoader} from '../../modules/signup/actions';
import SubmitButton from '_components/molecules/SubmitButton';
import {PRIMARY, DISABLE} from '_styles/colors';
import {scaleWidth, scaleFontWithLineHeight} from '_styles/mixins';

const AboutScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.signup.loading);

  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(showLoader(true));
    dispatch(registerUser(email, password));
  };
  return (
    <>
      <SafeAreaView style={styles.con}>
        <DefaultText text="Register Details" customStyle={styles.title} />
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Email"
            name="email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Password"
            name="password"
            textContentType="password"
          />
        </View>
        <SubmitButton title={'Register'} onPress={onSubmit} disabled={false} />
      </SafeAreaView>
      <Loader visible={loading} testID="full-screen-loader" />
    </>
  );
};

export default AboutScreen;

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
  body: {
    width: '100%',
  },
  input: {
    alignSelf: 'flex-start',
    borderBottomColor: DISABLE,
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: scaleWidth(12),
  },
});
