import { useState } from 'react';
import { AddMovie, MovieList } from './components';
import { IMovie } from './interfaces';
import './App.css';

export function App() {
  const [newMovie, setNewMovie] = useState<IMovie | null>(null);
  const [allMovies, setAllMovies] = useState<IMovie[] | []>([]);

  const addMovieToList = (movie: IMovie) => {
    setAllMovies([...allMovies, movie]);
  };
  return (
    <main>
      <AddMovie setNewMovie={setNewMovie} addMovieToList={addMovieToList} />
      <MovieList movies={allMovies} />
    </main>
  );
}
