import {StyleSheet} from 'react-native';
import {Colors, Spacer} from '@theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: Spacer.S,
    backgroundColor: Colors.BLACK,
    paddingTop: 70,
    paddingBottom: Spacer.M,
  },
});

export default styles;
