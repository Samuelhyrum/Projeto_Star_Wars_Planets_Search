import React from 'react';
import './App.css';
import Table from './components/Table';
import StarProvider from './context/StarProvider';

function App() {
  return (
    <StarProvider>
      <header>
        <h1>
          Welcome to the Home, Sr. of Galaxy!
        </h1>
        <h2>
          What do you want to see today?
        </h2>
      </header>
      <Table />
    </StarProvider>
  );
}

export default App;
