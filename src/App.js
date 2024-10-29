import React from 'react';
import Jumbotron from './components/Jumbo';
import GeniusSearch from './components/GeniusSearch';
import Container from "./components/Container"


function App() {
  return (
    <div className="App">
      
        <Jumbotron />
        <Container >
        <GeniusSearch />

        </Container>

    </div>
  );
}

export default App;
