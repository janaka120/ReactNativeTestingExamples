import React from 'react';
import ToasterMessage from 'react-native-toaster';
import {useSelector} from 'react-redux';

import {toasterMessageSelector} from '../../../modules/toaster/selectors';

const Toaster = () => {
  const toasterMessage = useSelector(toasterMessageSelector);
  return <ToasterMessage message={toasterMessage} />;
};

export default Toaster;
