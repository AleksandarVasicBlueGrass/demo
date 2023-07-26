import {StyleSheet} from 'react-native';
import {Colors} from '@theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.BLACK,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: Colors.WHITE_24,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 70,
    paddingTop: 15,
    paddingHorizontal: 53,
    height: 110,
  },
  qrIcon: {
    backgroundColor: Colors.BLUE,
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
