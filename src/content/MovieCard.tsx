import * as React from 'react'
import './style.scss' 

export default function MovieCard({title, description, year, genre}: any) {
    return (
        <>
            <h3>{title}</h3>
            <span className="year">{year}</span>
            <p>{description}</p>
            <span className="genre">{genre}</span>
        </>
    )
}

MovieCard.defaultProps = {
    title: 'Just a Perfect Movie',
    description: 'Cool description'
}