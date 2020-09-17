import CounterScreen from './CounterScreen';
import FeatureScreen from './FeatureScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import {Navigation} from 'react-native-navigation';
import ProfileScreen from './ProfileScreen';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Profile', () => ProfileScreen);
Navigation.registerComponent('Feature', () => FeatureScreen);
Navigation.registerComponent('Counter', () => CounterScreen);
