import React from 'react';
import PhotoList from '../PhotoList';
import photo from '../../assets/small/food/0.jpg';
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
      <p>{currentCategory.description}</p>
      <div>
        <img
          src={photo}
          />
      </div>
      {/* <PhotoList category={currentCategory.name} /> */}
    </section>
  );
}
export default Gallery;
