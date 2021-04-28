import * as React from 'react';
import { HeaderInner } from './Header.interface';
import './style.scss';

const Header: React.FC<HeaderInner> = (props: HeaderInner) => (
  <header className="header">{props.children}</header>
);

export default Header;
