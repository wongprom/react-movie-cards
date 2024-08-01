import { useState } from 'react';
import { AddMovie, MovieList } from './components';
import { IMovie } from './interfaces';
import './App.css';

export function App() {
  const [_, setNewMovie] = useState<IMovie | null>(null);
  const [allMovies, setAllMovies] = useState<IMovie[] | []>([]);

  const addMovieToList = (movie: IMovie) => {
    setAllMovies([...allMovies, movie]);
  };

  const handlerRemoveMovieFromList = (movieId: string) => {
    setAllMovies(allMovies.filter((movie) => movie.id !== movieId));
  };
  return (
    <main>
      <AddMovie setNewMovie={setNewMovie} addMovieToList={addMovieToList} />
      <MovieList
        movies={allMovies}
        handlerRemoveMovieFromList={handlerRemoveMovieFromList}
      />
    </main>
  );
}
