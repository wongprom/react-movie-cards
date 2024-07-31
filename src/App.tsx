import { useState } from 'react';
import AddMovie from './components/AddMovie';
import MovieCard from './components/MovieCard';
import { IMovie } from './interfaces';
import './App.css';

export function App() {
  const [newMovie, setNewMovie] = useState<IMovie | null>(null);
  return (
    <main>
      <AddMovie setNewMovie={setNewMovie} />
      {newMovie && <MovieCard movie={newMovie} />}
    </main>
  );
}
