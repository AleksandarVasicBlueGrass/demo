import {StyleSheet} from 'react-native';
import {Colors} from '@theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.ORANGE,
    flexDirection: 'row',
    borderRadius: 8,
    padding: 20,
    overflow: 'visible',
    height: 122,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
    gap: 10,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    overflow: 'visible',
  },
  text: {
    alignSelf: 'flex-start',
  },
  image: {
    alignSelf: 'flex-end',
    height: 149,
    width: 149,
    right: 24,
    top: -32,
  },
  discount: {
    position: 'absolute',
    flexDirection: 'row',
    zIndex: 2,
    backgroundColor: Colors.WHITE,
    width: 63,
    height: 63,
    borderRadius: 31.5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    top: -2,
    paddingTop: 1,
  },
  discountText: {
    left: 3,
  },
  percentage: {
    top: -6,
    left: 3,
  },
});

export default styles;
