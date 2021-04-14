import * as React from 'react'
import './style.scss' 

interface MovieCardProps {
    title: string
    description: string
    year: number
    genre: string
}

const MovieCard: React.FC<MovieCardProps> = ({title, description, year, genre}) => {
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

export default MovieCard;