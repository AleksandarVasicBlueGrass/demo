import {StyleSheet} from 'react-native';
import {Colors, Spacer} from '@theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    flex: 1,
  },
  backgroundImage: {
    height: 265,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  },
  button: {
    right: 6,
    width: 116,
    height: 36,
    alignSelf: 'flex-end',
    bottom: 14,
    justifyContent: 'center',
  },
  orderInfoContainer: {
    marginTop: 28,
    paddingHorizontal: Spacer.M,
  },
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 111,
    gap: Spacer.XS,
    paddingHorizontal: Spacer.S,
    marginBottom: 46,
  },
  buttonBottom: {
    width: 163,
  },
  modal: {
    gap: 28,
    backgroundColor: Colors.BLACK_2,
    paddingHorizontal: Spacer.S,
  },
  modalButtonsContainer: {
    gap: 8,
    width: '100%',
  },
  modalMessage: {
    paddingHorizontal: Spacer.XS,
  },
  modalButton: {
    width: '100%',
  },
});

export default styles;
