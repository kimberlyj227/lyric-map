import React from 'react';
import Jumbotron from './components/Jumbo';
// import GeniusSearch from './components/GeniusSearch';
import Container from "./components/Container"
import LyricSearch from "./components/LyricSearch";


function App() {
  return (
    <div className="App">
        <Jumbotron />
        <Container >
        <LyricSearch />
        </Container>

    </div>
  );
}

export default App;
