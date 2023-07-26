import React, {FC, memo} from 'react';
import {View, ViewStyle} from 'react-native';
import {DMText, DMImage} from '@atoms';
import styles from './styles';

type DMDiscountBannerProps = {
  title?: string;
  subtitle?: string;
  discount?: string | number;
  style?: ViewStyle;
};

const DMDiscountBanner: FC<DMDiscountBannerProps> = ({
  title,
  subtitle,
  discount,
  style,
}) => {
  const formatedDiscount = `-${discount}`;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftContainer}>
        <DMText font="FAMILIJEN_GROTESK/R/S/S" children={title} color="BLACK" />
        <DMText
          font="FAMILIJEN_GROTESK/R/XXXS/S"
          children={subtitle}
          letterSpacing={0.2}
          color="BLACK_64"
        />
      </View>
      <View style={styles.rightContainer}>
        <DMImage image="burger" style={styles.image} resizeMode="contain" />
        <View style={styles.discount}>
          <DMText
            font="FAMILIJEN_GROTESK/R/L/L"
            alignSelf="center"
            children={formatedDiscount}
            color="BLACK"
            style={styles.discountText}
          />
          <DMText
            font="FAMILIJEN_GROTESK/R/XXS/XXS"
            alignSelf="center"
            children={'%'}
            style={styles.percentage}
            color="BLACK"
          />
        </View>
      </View>
    </View>
  );
};

export default memo(DMDiscountBanner);
