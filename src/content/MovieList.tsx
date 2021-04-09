import * as React from 'react'
import MovieCard from './MovieCard'
import AllData from '../data.json5'
import ImageHelper from './ImageHelper'
import Interstellar from './img/interstellar.jpg'
import RikAndMorti from './img/rikAndMorti.jpg'
import StrangerThings from './img/strangerThings.jpg'


const MovieData = AllData.movies
MovieData[0].image = RikAndMorti
MovieData[1].image = StrangerThings
MovieData[2].image = Interstellar
console.log(MovieData)


class MovieList extends React.Component {
    
    render() {
        if (MovieData[0].image != RikAndMorti || MovieData[1].image != StrangerThings || MovieData[2].image != Interstellar) {
            throw new Error('Произошла ошибка');
        }
        return (
            <>
                {MovieData.map((movie: any) => (
                    <div className="MovieCard">
                        <ImageHelper imagePath={movie.image} />
                        <MovieCard
                            title={movie.title}
                            description={movie.description}
                            year={movie.year}
                            genre={movie.genre}
                            key={movie.id}
                         />
                     </div>
                ))}
            </>
        )
    }
}

export default MovieList