import * as React from 'react';
import MovieCard from './MovieCard';
import { Datats } from '../Datats';
import ImageHelper from './ImageHelper';
import Interstellar from './img/interstellar.jpg';
import RikAndMorti from './img/rikAndMorti.jpg';
import StrangerThings from './img/strangerThings.jpg';

const MovieData = Datats.movies;
MovieData[0].image = RikAndMorti;
MovieData[1].image = StrangerThings;
MovieData[2].image = Interstellar;
console.log(MovieData);

class MovieList extends React.Component {
  render(): React.ReactNode {
    if (
      MovieData[0].image != RikAndMorti ||
      MovieData[1].image != StrangerThings ||
      MovieData[2].image != Interstellar
    ) {
      throw new Error('Произошла ошибка');
    }
    return (
      <>
        {MovieData.map((movie) => (
          <div className="MovieCard" key={movie.id}>
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
    );
  }
}

export default MovieList;
