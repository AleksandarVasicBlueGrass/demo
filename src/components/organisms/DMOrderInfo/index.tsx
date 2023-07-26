import React, {FC, memo} from 'react';
import {View, ViewStyle} from 'react-native';
import {DMIcon, DMText} from '@atoms';
import {DMTextIcon} from '@molecules';
import {Food} from '@models';
import styles from './styles';

type DMOrderInfoProps = {
  data: Food;
  style?: ViewStyle;
};

const DMOrderInfo: FC<DMOrderInfoProps> = ({data, style}) => {
  const formatedWeight = data?.weight ? `${data?.weight} g` : '';
  const formatedCalories = data?.calories ? `${data?.calories} kcal` : '';
  const formatedVegan = data?.vegan ? 'Vegan' : 'Non-vegan';
  const formatedPrice = data?.price ? `R${data.price}` : '';
  const formatedAvailability =
    data?.availability > 0 ? `${data?.availability} available` : '';

  return (
    <View style={[styles.container, style]}>
      <DMText
        font="CABINET_GROTESK/B/XL/XL"
        color="WHITE"
        children={data?.name}
      />
      <DMText
        font="FAMILIJEN_GROTESK/R/XXS/S"
        letterSpacing={0.4}
        color="WHITE"
        children={data?.description}
      />
      <View style={styles.iconContainer}>
        {formatedWeight && <DMTextIcon icon="weight" title={formatedWeight} />}
        {formatedCalories && (
          <DMTextIcon icon="calories" title={formatedCalories} />
        )}
        {formatedVegan && (
          <DMTextIcon icon="warning" iconColor="ORANGE" title={formatedVegan} />
        )}
      </View>
      {data?.spicy && (
        <View style={styles.spicyBanner}>
          <DMIcon icon="calories" color="WHITE" />
          <DMText
            letterSpacing={2}
            color="WHITE"
            children="A bit spicy, but not too much"
            font="FAMILIJEN_GROTESK/R/XXS/S"
          />
        </View>
      )}

      <View style={styles.priceContainer}>
        {formatedPrice && (
          <DMText
            font="FAMILIJEN_GROTESK/R/XXXL/XXXL"
            color="WHITE"
            children={formatedPrice}
          />
        )}

        {formatedAvailability && (
          <DMText
            font="FAMILIJEN_GROTESK/R/XXS/S"
            letterSpacing={0.8}
            color="GREY_3"
            alignSelf="center"
            children={formatedAvailability}
          />
        )}
      </View>
    </View>
  );
};

export default memo(DMOrderInfo);
