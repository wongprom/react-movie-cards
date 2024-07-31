// info input type"range" => https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
export function App() {
  const n = 5;

  const handlerSubmit = () => {};

  return (
    <main>
      <form onSubmit={handlerSubmit}>
        <fieldset>
          <legend>Add Movie</legend>
          {/* Title (input) */}
          <label htmlFor="title">Title</label>
          <input type="text" name="title" />
          {/* Rating 1 - 5 ⭐️⭐️⭐️☆☆ */}
          <label htmlFor="rating">Rating</label>
          <input type="range" min="0" max="5" name="rating" />
          {[...Array(n)].map((e, i) => (
            <span className="" key={i}>
              ⭐️
            </span>
          ))}
          {/* Genre (Select) Drama, Horror, Thriller, Action, Comedy, Western */}
          <label htmlFor="genre">Genre</label>
          <select name="genre">
            <option value="" selected></option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="thriller">Thriller</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="western">Western</option>
          </select>
          {/* Description (textarea) */}
          <label htmlFor="">Description</label>
          <textarea name="description" rows={10} cols={40} />
        </fieldset>
        {/* Clear Button */}
        <button>Clear</button>
        {/* Add Button */}
        <button type="submit">Add</button>
      </form>
    </main>
  );
}
