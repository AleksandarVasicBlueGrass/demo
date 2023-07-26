import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';
import {DMScreenWrapper, DMButton, DMText, DMImage} from '@atoms';
import {AppNavigators} from '@navigation';
import styles from './styles';

const Welcome: FC<WelcomeProps> = ({navigation}) => {
  const goToHome = () => navigation.navigate(AppNavigators.TAB_NAVIGATOR);
  return (
    <DMScreenWrapper edges={['top']} style={styles.wrapper}>
      <ScrollView bounces={false} contentContainerStyle={styles.container}>
        <View>
          <DMText
            font="MAX_TF/B/XL/XL"
            letterSpacing={-1.4}
            children="MultiDeli"
            style={styles.topText}
          />
          <DMImage image="bag" style={styles.image} />
          <View style={styles.mainContainer}>
            <View style={styles.block} />
            <DMText
              font="CABINET_GROTESK/M/XXXL/XXXL"
              children={'Welcome to the universe of\nfresh office food'}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <DMText
            font="NANUM_PEN/R/XXL/XXL"
            textAlign="center"
            children={'Sooo many\noptions'}
            style={styles.optionText}
          />
          <DMButton
            title="See how it works"
            style={styles.topButton}
            borderColor="GREY_2"
          />
          <DMText
            font="FAMILIJEN_GROTESK/M/XXS/M"
            letterSpacing={1.2}
            alignSelf="center"
            children="Skip and open dashboard"
            onPress={goToHome}
          />
        </View>
      </ScrollView>
    </DMScreenWrapper>
  );
};

export default Welcome;
