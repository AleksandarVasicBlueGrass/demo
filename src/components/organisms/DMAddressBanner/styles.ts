import {StyleSheet} from 'react-native';
import {Colors, Spacer} from '@theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: Spacer.XXS,
  },
  labelContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainContainer: {
    borderRadius: 8,
    backgroundColor: Colors.GREY_1,
    padding: Spacer.S,
    gap: 10,
  },
  textContainer: {
    gap: 4,
  },
  pinIcon: {
    alignSelf: 'flex-start',
    left: 2,
  },
});

export default styles;
