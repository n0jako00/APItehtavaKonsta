import './App.css';
import React from 'react';
import { useState } from 'react'
const API_URL = 'http://numbersapi.com/';

/* API_KEY ei tarvita tämän APIn kanssa. */

function App() {

  const [number, setNumber] = useState(0);
  const [result, setResult] = useState("");

  async function search(e) {
    e.preventDefault();
    try {
      const address = API_URL + number + '/?json';
      const response = await fetch(address);

      if (response.ok) {
        const json = await response.json();
        setResult(json.text);
      } else {
        alert('Error finding number.');
        console.log(response);
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div id="container">
      <form onSubmit={search}>
        <div>
          <label>Type a random number&nbsp;</label>
          <input type="number" value={number} onChange={e => setNumber(e.target.value)} ></input>
        </div>
        <div>
          <output>{result}</output>
        </div>
        <div>
          <button>Search</button>
        </div>
      </form>
    </div>
  );
}

export default App;
