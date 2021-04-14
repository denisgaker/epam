import * as React from 'react'
import {Datats} from '../Datats'

const FooterData = Datats.socialNetworkLinks

export default function SocLinks() {
    return (
        <div className="soc">
            {FooterData.map((fd) => (
                <a href={fd.link}
                   target={fd.target}
                   title={fd.desc}
                   className={fd.name}
                   key={fd.key}>
                </a>
            ))}
        </div>
    )
}
