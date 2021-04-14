import * as React from 'react'

interface HeadingProps {
    name: string
}

const Heading: React.FC<HeadingProps> = ({name}) => {
    return <h1>{`${name}`}</h1>
}

export default Heading