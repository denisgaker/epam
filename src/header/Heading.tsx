import * as React from 'react'
import {HeadingProps} from './interfaces'

const Heading: React.FC<HeadingProps> = ({name}) => {
    return <h1>{`${name}`}</h1>
}

export default Heading