import React, {FC, memo} from 'react';
import {FlatList, ViewStyle} from 'react-native';
import {useSelector} from 'react-redux';
import type {OrderItem} from '@reducers/OrderReducer';
import {selectOrders} from '@selectors/OrderSelector';
import {DMText} from '@atoms';
import {DMOrderListItem} from '@molecules';
import styles from './styles';

const renderItem = ({item}: {item: OrderItem}) => (
  <DMOrderListItem data={item} />
);

const renderHeader = () => (
  <DMText
    font="FAMILIJEN_GROTESK/R/S/S"
    color="WHITE"
    children="Recent orders"
  />
);

type DMOrderListProps = {
  style?: ViewStyle;
};

const DMOrderList: FC<DMOrderListProps> = ({style}) => {
  const orders = useSelector(selectOrders);

  return (
    <FlatList
      data={orders}
      style={style}
      contentContainerStyle={styles.contentContainerStyle}
      scrollEnabled={false}
      bounces={false}
      ListHeaderComponent={renderHeader}
      keyExtractor={item => item?.orderNumber?.toString()}
      renderItem={renderItem}
    />
  );
};

export default memo(DMOrderList);
