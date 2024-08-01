import { v4 as uuidv4 } from 'uuid';

import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { IMovie } from '../interfaces';

interface IAddMovieProps {
  setNewMovie: React.Dispatch<React.SetStateAction<IMovie | null>>;
  addMovieToList: (newMovie: IMovie) => void;
}

export const AddMovie = ({ setNewMovie, addMovieToList }: IAddMovieProps) => {
  const [errorText, setErrorText] = useState({
    title: '',
    genre: '',
  });
  const [formData, setFormData] = useState({
    title: '',
    rating: '3',
    genre: '',
    description: '',
  });

  const id4 = uuidv4();
  const isFormValid = !!formData.genre && !!formData.title;

  const handlerSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const newMovie: IMovie = {
      ...formData,
      id: id4,
    };
    console.log('🚀 ~ AddMovie ~ newMovie:', newMovie);
    setNewMovie(newMovie);
    addMovieToList(newMovie);
    handlerFormReset();
  };

  const handlerInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'title':
        if (value === '') {
          setErrorText((prevState) => ({
            ...prevState,
            title: 'Write a title',
          }));
        } else {
          setErrorText((prevState) => ({
            ...prevState,
            title: '',
          }));
        }
        break;
      case 'genre':
        if (value === '') {
          setErrorText((prevState) => ({
            ...prevState,
            genre: 'Choose a genre',
          }));
        } else {
          setErrorText((prevState) => ({
            ...prevState,
            genre: '',
          }));
        }
        break;
      default:
        break;
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlerFormReset = () => {
    setFormData(() => ({
      title: '',
      rating: '3',
      genre: '',
      description: '',
    }));
  };

  return (
    <form onSubmit={handlerSubmit}>
      <fieldset>
        <legend>Add Movie</legend>
        {/*  Title */}
        <div className="title-wrapper">
          <label htmlFor={'title'}>Title</label>
          <input
            id={'title'}
            name={'title'}
            value={formData.title}
            onChange={handlerInputChange}
            type={'text'}
          />
          <span style={{ color: 'red' }}>{errorText.title}</span>
        </div>
        {/* Rating 1 - 5 ⭐️⭐️⭐️☆☆ */}
        <div className="rating-wrapper">
          <label htmlFor={'rating'}>Rating</label>
          <input
            id={'rating'}
            name={'rating'}
            value={formData.rating}
            onChange={handlerInputChange}
            min={'0'}
            max={'5'}
            step="1"
            type={'range'}
          />
          {/* <div>
            {[...Array(5)].map((_, i) => (
              <span key={i}>⭐️</span>
            ))}
          </div> */}
        </div>
        {/* Genre */}
        <div className="genre-wrapper">
          <label htmlFor="genre">Genre</label>
          <select
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handlerInputChange}
          >
            <option value={''}>Choose a genre ...</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="thriller">Thriller</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="western">Western</option>
          </select>
          <span style={{ color: 'red' }}>{errorText.genre}</span>
        </div>
        {/* Description */}
        <div className="description-wrapper">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handlerInputChange}
            name="description"
            rows={10}
            cols={40}
          />
        </div>
      </fieldset>
      {/* Clear Button */}
      {/* Add Button */}
      <div>
        <button onClick={handlerFormReset}>Clear</button>
        <button type="submit" disabled={!isFormValid}>
          Add
        </button>
      </div>
    </form>
  );
};
