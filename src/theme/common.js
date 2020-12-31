import {StyleSheet} from 'react-native';

export default ({Colors}) => {
  return StyleSheet.create({
    button: {
      backgroundColor: Colors.primary,
    },
    backgroundPrimary: {
      backgroundColor: Colors.primary,
    },
    backgroundReset: {
      backgroundColor: Colors.transparent,
    },
    textInput: {
      borderWidth: 1,
      borderColor: Colors.text,
      backgroundColor: Colors.inputBackground,
      color: Colors.text,
      minHeight: 50,
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
  });
};
