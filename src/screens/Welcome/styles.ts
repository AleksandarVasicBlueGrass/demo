import {StyleSheet} from 'react-native';
import {Colors, Spacer} from '@theme';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.BLUE,
  },
  container: {
    paddingTop: 71,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  mainContainer: {
    paddingHorizontal: Spacer.L,
    marginBottom: 29,
  },
  block: {
    backgroundColor: Colors.ORANGE,
    width: 174,
    height: 36,
    position: 'absolute',
    zIndex: 0,
    transform: [{rotate: '-6.23deg'}],
    left: 35,
    top: 45,
  },
  image: {
    marginTop: 19,
    width: 200,
    height: 200,
    left: 3,
  },
  optionText: {
    transform: [{rotate: '-15deg'}],
    alignSelf: 'center',
    left: 114,
    marginBottom: 60,
  },
  topText: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacer.XL,
  },
  text: {
    alignSelf: 'flex-start',
  },
  buttonsContainer: {
    paddingHorizontal: 24,
    marginBottom: 77,
  },
  topButton: {
    marginBottom: 33,
  },
});

export default styles;
