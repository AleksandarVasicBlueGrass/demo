import React, {FC, memo} from 'react';
import {Image, ImageStyle, ImageResizeMode} from 'react-native';
import Images from '@images';
import styles from './styles';

type DMImageProps = {
  image?: keyof typeof Images;
  url?: string | null;
  resizeMode?: ImageResizeMode;
  style?: ImageStyle;
};

const DMImage: FC<DMImageProps> = ({
  image,
  url,
  resizeMode = 'cover',
  style,
}) => {
  if (!image && !url) {
    return;
  }
  const source = image ? Images?.[image] : {uri: url};

  return (
    <Image
      source={source}
      style={[styles.image, style]}
      resizeMode={resizeMode}
    />
  );
};

export default memo(DMImage);
