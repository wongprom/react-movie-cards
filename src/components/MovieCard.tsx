import { IMovie } from '../interfaces';

interface IMovieCardProps {
  movie: IMovie;
  handlerRemoveMovieFromList: (movieId: string) => void;
}

export const MovieCard = ({
  movie,
  handlerRemoveMovieFromList,
}: IMovieCardProps) => {
  return (
    <li onClick={() => handlerRemoveMovieFromList(movie.id)}>
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
