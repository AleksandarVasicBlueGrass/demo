import {StyleSheet} from 'react-native';
import {Colors, Spacer} from '@theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: Spacer.S,
  },
  discountBanner: {
    marginBottom: Spacer.L,
  },
  foodList: {
    marginTop: Spacer.XXS,
    marginBottom: Spacer.L,
  },
  orderList: {
    marginBottom: Spacer.L,
  },
});

export default styles;
