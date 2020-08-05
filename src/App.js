import React, { useState } from 'react';
import axios from 'axios';
//https://ant.design/
import { Modal } from 'antd';
import 'antd/dist/antd.css';

import Search from './components/Search.js';
import Results from './components/Results.js';
import MovieDetails from './components/MovieDetails.js';

function App() {
  const [movie, setMovie] = useState({
    title: '',
    results: [],
    selected: {},
  });

  const [error, setError] = useState(null);

  const [activateModal, setActivateModal] = useState({ visible: false });

  const apiurl = 'http://www.omdbapi.com/?apikey=dfe6d885';

  const search = (event) => {
    event.preventDefault();
    axios(apiurl + '&s=' + movie.title + '&y=' + movie.year)
      .then(({ data }) => {
        if (data.Response === 'False') {
          setError(data.Error);
          console.log(data.Error);
          alert(data.Error);
        } else {
          let results = data.Search;
          console.log(results);
          setMovie({ ...movie, results: results });
        }
      })
      .catch(({ message }) => {
        setError(message);
      });
  };

  function handleChange({ target }) {
    setMovie({
      ...movie,
      [target.name]: target.value,
    });
  }

  const openMovieDetails = (id) => {
    axios(apiurl + '&i=' + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setMovie({ ...movie, selected: result });
    });
  };

  const showModal = () => {
    setActivateModal({
      visible: true,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron text-center">
            <h1>Search Movies App</h1>
            <Search onChange={handleChange} onSubmit={search} movie={movie} />
          </div>
          <br />
          <br />
          <Results
            results={movie.results}
            openMovieDetails={openMovieDetails}
            showModal={showModal}
          />
          <Modal
            title="Detail"
            centered
            visible={activateModal.visible}
            onCancel={() => setActivateModal(false)}
            footer={null}
            width={1000}
          >
            {typeof movie.selected.Title != 'undefined' ? (
              <MovieDetails selected={movie.selected} />
            ) : (
              false
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;
