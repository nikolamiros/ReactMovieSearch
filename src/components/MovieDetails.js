import React from 'react';

function MovieDetails({ selected }) {
  return (
    <div className="row">
      <div className="col-4">
        <img src={selected.Poster} alt="" />
      </div>
      <div className="col-8">
        <div className="row">
          <div className="col">
            <h3>
              {selected.Title}{' '}
              <span style={{ color: '#41A8F8' }}>({selected.Year})</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>{selected.Rated}</p>
            <p>{selected.Runtime}</p>
            <p>{selected.Genre}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Actors: {selected.Actors}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>{selected.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
