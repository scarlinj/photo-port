import React from 'react';
import PhotoList from '../PhotoList';
// hard-coding the photo shows correct photo in the home page.  Remove this, since Gallery will not render images any more.  Moved to PhotoList.
import photo from '../../assets/small/commercial/0.jpg';
import { capitalizeFirstLetter } from '../../utils/helpers';

// function Gallery(props) {
  // const { currentCategory } = props;
  // const currentCategory = {
  //     name: "commercial",
  //     description:
  //       "Photos of grocery stores, food trucks, and other commercial projects",
  //   };
function Gallery({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      {/* <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1> */}
      {/* <p>{currentCategory.name}</p>
      <p>{currentCategory.description}</p> */}
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      {/* pass down the currentCategory.name as a prop into the Photolist component from Gallery */}
      <PhotoList category={currentCategory.name} />
      <div>
        <img
          src={photo}
          alt='Commercial Example'
          className='img-thumbnail mx-1'
          />
      </div>
      {/* <PhotoList category={currentCategory.name} description={currentCategory.description}/> */}
    </section>
  );
}
export default Gallery;
