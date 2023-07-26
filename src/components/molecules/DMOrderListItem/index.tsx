import React, {FC} from 'react';
import {View} from 'react-native';
import {DMText} from '@atoms';
import {dateFormat} from '@utils';
import type {OrderItem} from '@reducers/OrderReducer';
import styles from './styles';

type DMOrderListItemProps = {
  data: OrderItem;
};

const DMOrderListItem: FC<DMOrderListItemProps> = ({data}) => {
  const formatedPrice = `- R${data?.price}`;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <DMText
          font="FAMILIJEN_GROTESK/R/XXS/M"
          color="WHITE"
          letterSpacing={0.6}
          children={data?.name}
        />
        <DMText
          font="FAMILIJEN_GROTESK/R/XXXS/S"
          letterSpacing={0.6}
          color="GREY_3"
          children={dateFormat(data?.date)}
        />
      </View>
      <DMText
        font="FAMILIJEN_GROTESK/M/S/S"
        textAlign="right"
        color="WHITE"
        alignSelf="center"
        children={formatedPrice}
      />
    </View>
  );
};

export default DMOrderListItem;
