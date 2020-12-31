import {ActivityIndicator, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import startupAtom from '@/atoms/startup';
import {useSetRecoilState} from 'recoil';
import {useTheme} from '@/theme';
import {useTranslation} from 'react-i18next';

const StartupScreen = ({navigation}) => {
  const {Layout, Gutters, Fonts} = useTheme();
  const {t} = useTranslation();
  const setStartupAtom = useSetRecoilState(startupAtom);
  useEffect(() => {
    setTimeout(() => {
      setStartupAtom(true);
      navigation.navigate('Login');
    }, 1000);
  }, []);
  return (
    <View style={(Layout.fill, Layout.colCenter)}>
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
      <Text style={Fonts.textCenter}>{t('welcome')}</Text>
    </View>
  );
};

export default StartupScreen;
