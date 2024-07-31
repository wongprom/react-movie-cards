import { useState } from 'react';
import { AddMovie, MovieCard } from './components';
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
