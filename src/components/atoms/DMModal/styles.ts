import {StyleSheet} from 'react-native';
import {Colors} from '@theme';

const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    borderTopStartRadius: 48,
    borderTopEndRadius: 48,
    paddingTop: 70,
    paddingHorizontal: 32,
    paddingBottom: 48,
    backgroundColor: Colors.GREY_2,
  },
});

export default styles;
