import { MovieCard } from '.';
import { IMovie } from '../interfaces';

interface IMovieListProps {
  movies: IMovie[] | [];
}

export const MovieList = ({ movies }: IMovieListProps) => {
  return (
    <>
      <h2>List Of Movie Cards</h2>
      <ul>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>Add a movie to display it here </p>
        )}
      </ul>
    </>
  );
};
