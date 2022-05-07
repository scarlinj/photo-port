import React from 'react';


function Nav() {
  const categories = [
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];
  function categorySelected() {
    console.log("hello");
  }
  return (
<section className="my-5">
<header id="Nav">
  <h2>
    <a href="/">
      <span role="img" aria-label="camera"> 📸</span> Oh Snap!
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
      {categories.map((category) => (
        <li
          className="mx-1"
          // use "key" to uniquely identify properties or items in a database
          // whenever mapping over anything in JSX, the outermost element must have a unique key attribute
          // used category.name, since we expect each category to have unique name - oftentimes will use id
          key={category.name}
          // set up onClick() method below, will console log the category name
          // onClieck expects a funciton declaration
        >
          {/* <span onClick={categorySelected(category.name)} > */}
          {/* defined this function above as "categorySelected" - add (category.name) to console log the category name*/}
          {/* onClick expects a callback function declaration - wrap in a function rather than just calling categorySelected(category.name) */}
          <span onClick={categorySelected(category.name)} >
            {category.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
</header>
</section>
  );
}

// empty function below causing errors
// function 

export default Nav;