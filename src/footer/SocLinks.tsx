import * as React from 'react'
import AllData from '../data.json5'
{/* import './style.css' */}
{/* import './style.scss' */}

const FooterData = AllData.socialNetworkLinks

export default function SocLinks() {
    return (
        <div className="soc">
            {FooterData.map((fd: any) => (
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
