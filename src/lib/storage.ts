import {MMKV} from 'react-native-mmkv';
import {Storage} from 'redux-persist';

const mmkvStorage = new MMKV();

const storage: Storage = {
  setItem: (name, value) => {
    mmkvStorage.set(name, value);
    return Promise.resolve(true);
  },
  getItem: name => {
    const value = mmkvStorage.getString(name);
    return Promise.resolve(value ? value : null);
  },
  removeItem: key => {
    mmkvStorage.delete(key);
    return Promise.resolve();
  },
};

export default storage;
