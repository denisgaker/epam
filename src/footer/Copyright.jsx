import React from 'react'

export default function Copyright({name}) {
    const date = new Date().getFullYear()
    const text = ' | All right reserved'
    return (
        <p>
            &#169; {` ${date} ${name} ${text}`}
        </p>
    )
}