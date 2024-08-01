import { v4 as uuidv4 } from 'uuid';

import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { IMovie } from '../interfaces';

import './AddMovie.css';

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
  console.log('errorText.title ', errorText.title.length);
  return (
    <form onSubmit={handlerSubmit}>
      <fieldset>
        <legend>ADD MOVIE</legend>
        {/*  Title */}
        <div className="title-wrapper">
          <span className="error-color-red">*</span>
          <label
            className={`${errorText.title ? 'error-color-red' : ''}`}
            htmlFor={'title'}
          >
            Title
          </label>
          <input
            className={`${
              errorText.title ? 'error-bg-red error-border-color-red' : ''
            }`}
            id={'title'}
            name={'title'}
            value={formData.title}
            onChange={handlerInputChange}
            type={'text'}
          />
          <span className={`${errorText.title ? 'error-color-red' : ''}`}>
            {errorText.title}
          </span>
        </div>
        {/* Rating 1 - 5 */}
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
        </div>
        {/* Genre */}
        <div className="genre-wrapper">
          <span className="error-color-red">*</span>
          <label
            className={`${errorText.genre ? 'error-color-red' : ''}`}
            htmlFor="genre"
          >
            Genre
          </label>
          <select
            className={`${
              errorText.genre ? 'error-bg-red error-border-color-red' : ''
            }`}
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
      <div className="button-wrapper">
        <button onClick={handlerFormReset}>Clear</button>
        <button className="submit" type="submit" disabled={!isFormValid}>
          Add
        </button>
      </div>
    </form>
  );
};
