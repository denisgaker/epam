import * as React from 'react';
import { Datats } from '../Datats';

const FooterData = Datats.socialNetworkLinks;

const SocLinks: React.FC = () => {
  return (
    <div className="soc">
      {FooterData.map((fd) => (
        <a href={fd.link} target={fd.target} title={fd.desc} className={fd.name} key={fd.key}></a>
      ))}
    </div>
  );
};

export default SocLinks;
