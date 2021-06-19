import * as React from 'react';
import '../style.scss';
import { MovieCardProps } from './MovieCard.interfaces';

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  description,
  year,
  genre,
}: MovieCardProps) => {
  return (
    <>
      <h3>{title}</h3>
      <span className="year">{year}</span>
      <p>{description}</p>
      <span className="genre">{genre}</span>
    </>
  );
};

MovieCard.defaultProps = {
  title: 'Just a Perfect Movie',
  description: 'Cool description',
};

export default MovieCard;
