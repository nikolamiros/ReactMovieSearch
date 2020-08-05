import React from 'react';

function Results({ results, openMovieDetails, showModal }) {
  return (
    <div className="row">
      {results.map((result) => (
        <div
          className="col"
          style={{ marginBottom: '25px' }}
          key={result.imdbID}
        >
          <div
            className="card h-100"
            style={{ width: '18rem', cursor: 'pointer' }}
            onClick={() => {
              openMovieDetails(result.imdbID);
              showModal();
            }}
          >
            <img className="card-img-top h-100" src={result.Poster} alt="" />
            <div className="card-body">
              <h5 className="card-title">{result.Title}</h5>
              <p className="card-text">Year: {result.Year}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
