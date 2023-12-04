import React from 'react';
import PhotoList from '../PhotoList';
// hard-coding the photo shows correct photo in the home page
import photo from '../../assets/small/commercial/0.jpg';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  // const { currentCategory } = props;
  const currentCategory = {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    };
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <p>{currentCategory.description}</p>
      <div>
        <img
          src={photo}
          alt='Commercial Example'
          className='img-thumbnail mx-1'
          />
      </div>
      {/* <PhotoList category={currentCategory.name} /> */}
    </section>
  );
}
export default Gallery;
