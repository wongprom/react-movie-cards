import './App.css';
// info input type"range" => https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
export function App() {
  const n = 5;

  const handlerSubmit = () => {};

  return (
    <main>
      <form onSubmit={handlerSubmit}>
        <fieldset>
          <legend>Add Movie</legend>
          {/*  Title (input) */}
          <div className="title-wrapper">
            <label htmlFor={'title'}>Title</label>
            <input type={'text'} id={'title'} name={'title'} />
          </div>
          {/* Rating 1 - 5 ⭐️⭐️⭐️☆☆ */}
          <div className="rating-wrapper">
            <label htmlFor={'rating'}>Rating</label>
            <input
              type={'range'}
              id={'rating'}
              name={'rating'}
              min={'0'}
              max={'5'}
            />
            <div>
              {[...Array(n)].map((e, i) => (
                <span key={i}>⭐️</span>
              ))}
            </div>
          </div>
          {/* Genre (Select) Drama, Horror, Thriller, Action, Comedy, Western */}
          <div className="genre-wrapper">
            <label htmlFor="genre">Genre</label>
            <select id="genre" name="genre">
              <option value=""></option>
              <option value="drama">Drama</option>
              <option value="horror">Horror</option>
              <option value="thriller">Thriller</option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="western">Western</option>
            </select>
          </div>
          {/* Description (textarea) */}
          <div className="description-wrapper">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows={10} cols={40} />
          </div>
        </fieldset>
        {/* Clear Button */}
        {/* Add Button */}
        <div>
          <button>Clear</button>
          <button type="submit">Add</button>
        </div>
      </form>
    </main>
  );
}
