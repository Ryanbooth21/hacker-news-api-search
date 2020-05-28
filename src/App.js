import React from 'react';
import Search from './components/search';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Search Hacker News</h1>
        <Search />
      </header>
    </div>
  );
}

export default App;
