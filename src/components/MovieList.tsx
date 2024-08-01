import { MovieCard } from '.';
import { IMovie } from '../interfaces';

interface IMovieListProps {
  movies: IMovie[] | [];
  handlerRemoveMovieFromList: (movieId: string) => void;
}

export const MovieList = ({
  movies,
  handlerRemoveMovieFromList,
}: IMovieListProps) => {
  return (
    <div>
      <h2>List Of Movie Cards</h2>
      <ul>
        {movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              handlerRemoveMovieFromList={handlerRemoveMovieFromList}
            />
          ))}
      </ul>
      {movies.length < 1 && <p>Add a movie to display it here</p>}
    </div>
  );
};
