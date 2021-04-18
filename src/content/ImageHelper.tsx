import * as React from 'react';
import { ImagePathType } from './interfaces';

const ImageHelper = ({ imagePath }: ImagePathType) => {
  return <img src={imagePath} />;
}

export default ImageHelper;
