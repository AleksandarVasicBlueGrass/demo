import {StyleSheet} from 'react-native';
import {Colors} from '@theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 12,
  },
  contentContainerStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  foodItem: {
    overflow: 'hidden',
    height: 60,
    width: 60,
    borderColor: Colors.GREY_1,
    borderRadius: 30,
  },
  image: {
    height: 60,
    width: 60,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.GREY_1,
    height: 60,
    width: 60,
    borderRadius: 30,
    paddingLeft: 3,
    paddingBottom: 2,
  },
  error: {
    paddingVertical: 20,
  },
});

export default styles;
