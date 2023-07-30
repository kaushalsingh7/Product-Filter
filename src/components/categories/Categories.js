import React from "react";
import "./Categories.css";
const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
const Categories = ({ categories, filterItems }) => {
  return (
    <div className="--flex-center">
      {categories.map((category, index) => {
        return (
          <buuton
            className="btn --btn --btn-secondary"
            type="button"
            key={index}
            onClick={() => filterItems(category)}
          >
            {capitalize(category)}
          </buuton>
        );
      })}
    </div>
  );
};

export default Categories;
