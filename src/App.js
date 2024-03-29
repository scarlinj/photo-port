import React, { useState } from 'react';
import Nav from "./components/Nav";
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import PhotoList from './components/PhotoList';
import Footer from './components/Footer';

// below function returns JSX that represents HTML in JavaScript
function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery 
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Gallery>
        <About></About>
        <Contact></Contact>
        <PhotoList></PhotoList>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;