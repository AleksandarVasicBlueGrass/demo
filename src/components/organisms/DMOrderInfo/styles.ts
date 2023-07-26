import {StyleSheet} from 'react-native';
import {Colors} from '@theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 11,
  },
  spicyBanner: {
    width: '100%',
    justifyContent: 'flex-start',
    gap: 11.5,
    paddingHorizontal: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    backgroundColor: Colors.RED,
    borderRadius: 8,
  },
  priceContainer: {
    gap: 16,
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
});

export default styles;
