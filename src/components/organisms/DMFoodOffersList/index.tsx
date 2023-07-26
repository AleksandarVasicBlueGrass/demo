import React, {FC, memo, useCallback} from 'react';
import {FlatList, View, ViewStyle, TouchableOpacity} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoute} from '@navigation';
import {AppThunkDispatch} from '@store';
import {getFood} from '@actions/FoodActions';
import {selectFood} from '@selectors/FoodSelector';
import {DMImage, DMText, DMLoadingSpinner} from '@atoms';
import type {Food} from '@models';
import styles from './styles';

const renderItem = ({
  item,
  onItemPress,
}: {
  item: Food;
  onItemPress: (foodItem: Food) => void;
}) => {
  return (
    <TouchableOpacity style={styles.foodItem} onPress={() => onItemPress(item)}>
      <DMImage url={item?.image} style={styles.image} />
    </TouchableOpacity>
  );
};

type DMFoodOffersListProps = {
  style?: ViewStyle;
};

const DMFoodOffersList: FC<DMFoodOffersListProps> = ({style}) => {
  const navigation = useNavigation<HomeProps['navigation']>();
  const dispatch = useDispatch<AppThunkDispatch>();
  const {food, loading, error} = useSelector(selectFood);

  const data: Food[] = food?.slice(0, food?.length > 5 ? 4 : 5);
  const sumData = food?.length > 0 ? food.length - data.length : 0;
  const footerText = `${sumData > 0 ? '+' + sumData : ''} `;

  const onItemPress = (foodItem: Food) =>
    navigation.navigate(AppRoute.ORDER_SCREEN, {foodItem});

  const onGetFood = useCallback(() => {
    dispatch(getFood());
  }, [dispatch]);

  useFocusEffect(onGetFood);

  const renderFooter = () =>
    data.length < 5 ? (
      <View style={styles.footer}>
        <DMText
          font="FAMILIJEN_GROTESK/R/XXS/M"
          letterSpacing={2}
          color="WHITE"
          alignSelf="center"
          children={footerText}
        />
      </View>
    ) : (
      false
    );

  if (loading && !data?.length) {
    return <DMLoadingSpinner />;
  }

  if (error) {
    return (
      <DMText
        font="FAMILIJEN_GROTESK/R/XXS/M"
        color="RED"
        alignSelf="center"
        children="Something went wrong"
        style={styles.error}
      />
    );
  }

  return (
    <FlatList
      data={data}
      style={style}
      contentContainerStyle={styles.contentContainerStyle}
      scrollEnabled={false}
      bounces={false}
      horizontal
      keyExtractor={item => item?.id.toString()}
      renderItem={({item}) => renderItem({item, onItemPress})}
      ListFooterComponent={renderFooter}
    />
  );
};

export default memo(DMFoodOffersList);
