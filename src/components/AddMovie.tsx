import { ChangeEventHandler, FormEventHandler, useState } from 'react';

const AddMovie = () => {
  const [title, setTitle] = useState<string>('');
  const [rating, setRating] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handlerSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('🚀 ~ AddMovie ~ title:', title);
    console.log('🚀 ~ AddMovie ~ rating:', rating);
    console.log('🚀 ~ AddMovie ~ genre:', genre);
    console.log('🚀 ~ AddMovie ~ description:', description);
  };

  const handlerTitleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handlerRatingInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setRating(e.target.value);
  };

  const handlerGenreSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    e.preventDefault();
    setGenre(e.target.value);
  };

  const handlerDescriptionTextarea: ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handlerFormReset = () => {
    setTitle('');
    setRating('');
    setGenre('');
    setDescription('');
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
            value={title}
            onChange={handlerTitleInput}
            type={'text'}
          />
        </div>
        {/* Rating 1 - 5 ⭐️⭐️⭐️☆☆ */}
        <div className="rating-wrapper">
          <label htmlFor={'rating'}>Rating</label>
          <input
            id={'rating'}
            name={'rating'}
            value={rating}
            onChange={handlerRatingInput}
            min={'0'}
            max={'5'}
            step="1"
            type={'range'}
          />
          <div>
            {[...Array(5)].map((_, i) => (
              <span key={i}>⭐️</span>
            ))}
          </div>
        </div>
        {/* Genre */}
        <div className="genre-wrapper">
          <label htmlFor="genre">Genre</label>
          <select
            id="genre"
            name="genre"
            value={genre}
            onChange={handlerGenreSelect}
          >
            <option value={''}>Choose a genre ...</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="thriller">Thriller</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="western">Western</option>
          </select>
        </div>
        {/* Description */}
        <div className="description-wrapper">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={handlerDescriptionTextarea}
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
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddMovie;
