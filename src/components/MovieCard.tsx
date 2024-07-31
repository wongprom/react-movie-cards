import { IMovie } from '../interfaces';

interface IMovieCardProps {
  movie: IMovie;
}

export const MovieCard = ({ movie }: IMovieCardProps) => {
  return (
    <li>
      <div>
        <div>
          <span>{movie.title}</span>
          <span>{movie.rating}</span>
        </div>
        <div>
          <span>{movie.genre}</span>
        </div>
        <div>
          <p>{movie.description}</p>
        </div>
      </div>
    </li>
  );
};
