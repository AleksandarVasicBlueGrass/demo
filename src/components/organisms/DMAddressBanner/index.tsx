import React, {FC, memo} from 'react';
import {View} from 'react-native';
import {DMButton, DMText, DMTag, DMIcon} from '@atoms';
import styles from './styles';

type DMAddressBannerProps = {
  tagTitle?: string | null;
  address?: string | null;
  fridgeId?: string | number | null;
};

const DMAddressBanner: FC<DMAddressBannerProps> = ({
  tagTitle,
  address = '',
  fridgeId = '',
}) => {
  const formatedFridge = `Fridge ID: ${fridgeId}`;
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <DMText
          font="FAMILIJEN_GROTESK/R/S/S"
          children="Nearest fridge"
          color="WHITE"
          alignSelf="center"
        />
        <DMTag title={tagTitle} />
      </View>
      <View style={styles.mainContainer}>
        <DMIcon
          icon="pin"
          color="GREEN"
          width={15}
          height={18}
          style={styles.pinIcon}
        />
        <View style={styles.textContainer}>
          <DMText
            children={address}
            color="WHITE"
            font="SF_PRO/R/XXS/M"
            letterSpacing={2}
          />
          <DMText
            children={formatedFridge}
            color="WHITE_64"
            font="SF_PRO/R/XXS/M"
            letterSpacing={2}
          />
        </View>
        <DMButton
          textColor="WHITE"
          backgroundColor="WHITE_10"
          borderColor="GREY_3"
          leftIcon="direction"
          title="Get directions"
          size="small"
        />
      </View>
    </View>
  );
};

export default memo(DMAddressBanner);
