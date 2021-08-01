import React from 'react';
import DisplayCard from './components/cards/DisplayCard';
import Header from './components/header/Header';

import bg from'./assets/bg.jpg';



function App() {
  return (
    <div>
      <Header />
      <div className="App" style={{ backgroundImage: `url(${bg})` }}>
        
        <div>
          <DisplayCard />
        </div>
      </div>
      
    </div>
  );
}

export default App;
