import React, {FC, useState} from 'react';
import {View, ScrollView, ImageBackground} from 'react-native';
import {useDispatch} from 'react-redux';
import {addOrder} from '@actions/OrderActions';
import {DMScreenWrapper, DMButton, DMModal, DMText, DMBlur} from '@atoms';
import {DMOrderInfo} from '@organisms';
import {Food} from '@models';
import styles from './styles';

const Order: FC<OrderProps> = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const dispatch = useDispatch<any>();

  const data: Food = route?.params?.foodItem;
  const imageSource = {uri: data?.image};
  const modalMessage = `You are about to order a \n ${data?.name}`;

  const showModal = () => setModalVisible(true);

  const onModalDismiss = () => setModalVisible(false);

  const onAddOrder = () => {
    setModalVisible(false);
    dispatch(addOrder(data));
    navigation.goBack();
  };

  return (
    <DMScreenWrapper style={styles.container}>
      <DMBlur visible={modalVisible} />
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.contentContainer}
        scrollEventThrottle={16}>
        <View style={styles.topContainer}>
          <ImageBackground
            source={imageSource}
            resizeMethod="resize"
            style={styles.backgroundImage}>
            <DMButton
              title="View more"
              borderColor="GREY_3"
              backgroundColor="WHITE_10"
              size="medium"
              textColor="WHITE"
              style={styles.button}
            />
          </ImageBackground>
          <DMOrderInfo data={data} style={styles.orderInfoContainer} />
        </View>
        <View style={styles.buttonsContainer}>
          <DMButton
            title="Grab it"
            backgroundColor="BLUE"
            onPress={showModal}
            style={styles.buttonBottom}
          />
          <DMButton
            title="See more"
            borderColor="GREY_3"
            backgroundColor="WHITE_10"
            textColor="WHITE"
            style={styles.buttonBottom}
            onPress={navigation.goBack}
          />
        </View>
      </ScrollView>
      <DMModal
        visible={modalVisible}
        style={styles.modal}
        onDismiss={onModalDismiss}>
        <DMText
          color="WHITE"
          textAlign="center"
          letterSpacing={2}
          font="FAMILIJEN_GROTESK/R/XLM/XL"
          children={modalMessage}
          style={styles.modalMessage}
        />
        <View style={styles.modalButtonsContainer}>
          <DMButton
            title="Go to payments"
            backgroundColor="BLUE"
            style={styles.modalButton}
            onPress={onAddOrder}
          />
          <DMButton
            title="Go back"
            textColor="WHITE"
            backgroundColor="TRANSPARENT"
            onPress={onModalDismiss}
          />
        </View>
      </DMModal>
    </DMScreenWrapper>
  );
};

export default Order;
