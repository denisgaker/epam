import * as React from 'react';
import { CopyrightProps } from './Copyright.interface';

const Copyright: React.FC<CopyrightProps> = ({ name }: CopyrightProps) => {
  const date: number = new Date().getFullYear();
  const text = ' | All right reserved';
  return <p>&#169; {` ${date} ${name} ${text}`}</p>;
};

export default Copyright;
