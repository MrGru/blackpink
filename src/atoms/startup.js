import {atom} from 'recoil';

const startupAtom = atom({
  key: 'startupAtom',
  default: false,
});

export default startupAtom;
