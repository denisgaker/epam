import * as React from 'react'
import { CopyrightProps } from './interfaces'


const Copyright: React.FC<CopyrightProps> = ({name}) => {
    const date: number = new Date().getFullYear()
    const text: string = ' | All right reserved'
    return (
        <p>
            &#169; {` ${date} ${name} ${text}`}
        </p>
    )
}

export default Copyright