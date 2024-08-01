import { useState } from 'react';
import { AddMovie, MovieCard } from './components';
import { IMovie } from './interfaces';
import './App.css';

export function App() {
  const [newMovie, setNewMovie] = useState<IMovie | null>(null);
  const [allMovies, setAllMovies] = useState<IMovie[] | []>([]);
  console.log('🚀 ~ App ~ allMovies:', allMovies);

  const addMovieToList = (movie: IMovie) => {
    setAllMovies([...allMovies, movie]);
  };
  return (
    <main>
      <AddMovie setNewMovie={setNewMovie} addMovieToList={addMovieToList} />
      {allMovies &&
        allMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </main>
  );
}
