import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import Animated from 'react-native-reanimated';
import {DMScreenWrapper} from '@atoms';
import {
  DMDiscountBanner,
  DMAddressBanner,
  DMFoodOffersList,
  DMOrderList,
} from '@organisms';
import {
  discountBannerAnimation,
  addressBannerAnimation,
  orderListAnimation,
} from '@utils';
import styles from './styles';

import DUMMY_DATA from './dummy';

const Home: FC<HomeProps> = () => {
  return (
    <DMScreenWrapper style={styles.container} edges={['bottom']}>
      <ScrollView
        bounces={false}
        style={styles.contentContainer}
        scrollEventThrottle={16}>
        <Animated.View entering={discountBannerAnimation}>
          <DMDiscountBanner
            title={DUMMY_DATA.discountBannerTitle}
            subtitle={DUMMY_DATA.discountBannerSubtitle}
            discount={DUMMY_DATA.discount}
            style={styles.discountBanner}
          />
        </Animated.View>
        <Animated.View entering={addressBannerAnimation}>
          <DMAddressBanner
            tagTitle={DUMMY_DATA.tagTitle}
            address={DUMMY_DATA.address}
            fridgeId={DUMMY_DATA.fridgeId}
          />
          <DMFoodOffersList style={styles.foodList} />
        </Animated.View>
        <Animated.View entering={orderListAnimation}>
          <DMOrderList style={styles.orderList} />
        </Animated.View>
      </ScrollView>
    </DMScreenWrapper>
  );
};

export default Home;
