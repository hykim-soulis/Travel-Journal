import React from 'react';
import './App.css';
import data from './components/data';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
