import * as React from 'react';
import { FooterInner } from './Footer.interfaces';
import './style.scss';

const Footer: React.FC<FooterInner> = (props: FooterInner) => (
  <footer className="footer">{props.children}</footer>
);

export default Footer;
