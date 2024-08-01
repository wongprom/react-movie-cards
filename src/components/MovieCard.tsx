import { IMovie } from '../interfaces';
import './MovieCard.css';
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
      <div className="row-one">
        <div>
          <span className="font-bold">Title: </span>
          <span>{movie.title}</span>
        </div>
        <span>{movie.rating}/5</span>
      </div>
      <div className="row-two">
        <div>
          <span className="font-bold">Genre: </span>
          <span>{movie.genre}</span>
        </div>
      </div>
      <div className="row-three">
        <div>
          <span className="font-bold">Description: </span>
          <span>{movie.description}</span>
        </div>
      </div>
    </li>
  );
};
