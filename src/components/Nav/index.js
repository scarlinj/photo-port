// import React from "react";
import React , { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [{
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
  ],
    setCurrentCategory,
    currentCategory,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);
  const handleClick = (item) => {
    console.log(item);
    return item;
  };

function categorySelected(name) {
  console.log(`${name} clicked`)
}

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span>
              Contact
            </span>
          </li>
          <li>
          {/* use .map function to have more DRY code - define catergories in an array above the return statement, listing each catregory as an object */}
          {/* When mapping over anything in JSX, outermost element must have key attribute set to be something unique. This helps React keep track of items in the virtual DOM */}
            <span onClick={() => handleClick('Contact')}>
              Contact
            </span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name
                }`}
                // used category.name as a key to find unique categories, since categories will not share name
                // Oftentimes, key will be an id
              key={category.name}
            >
              {/* provide function when user clicks category */}
              <span onClick={categorySelected} >
                {category.name}
              </span>
              {/* <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span> */}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;