import React, { useState } from 'react';
import getJoke from '../api/jokeData';
import Joker from '../components/Joke';

function Home() {
  const [btnText, setBtnText] = useState('Get A Joke');
  const [joke, setJoke] = useState({});

  const getAJoke = () => {
    getJoke().then((jokeObj) => {
      setJoke(jokeObj);
      setBtnText('Get Punchline');
      console.warn(getAJoke);
    });
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome Home!</h1>
      <Joker joke={joke} />
      {btnText === 'Get A Joke' || btnText === 'Get Another Joke' ? (
        <button type="button" onClick={getAJoke}>
          {btnText}
        </button>
      ) : (
        <button type="button" onClick={() => setBtnText('Get Another Joke')}>Get A Joke</button>
      )}
    </div>
  );
}

export default Home;
