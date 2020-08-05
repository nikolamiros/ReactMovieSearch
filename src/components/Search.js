import React from 'react';

function Search(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <div className="field">
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Enter a name for the movie"
            onChange={props.onChange}
            className="form-control"
            value={props.movie.title}
          />
        </div>
      </div>

      <input type="submit" value="Search movies" className="btn btn-primary" />
    </form>
  );
}

export default Search;
