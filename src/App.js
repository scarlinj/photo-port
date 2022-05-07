import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';


// below function returns JSX that represents HTML in JavaScript
function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        {/* import the About JSX element from .components/About */}
        <About></About>
      </main>
    </div>
  );
}

export default App;