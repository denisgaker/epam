import * as React from 'react'

export default function Copyright(name: string) {
    const date: number = new Date().getFullYear()
    const text: string = ' | All right reserved'
    return (
        <p>
            &#169; {` ${date} ${name} ${text}`}
        </p>
    )
}