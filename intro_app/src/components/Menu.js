import React from "react";
import Recipe from "./Recipe";
import "./Menu.css"

function Menu({recipes}) {
  return (
    <article>
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe}></Recipe>
        ))}
      </div>
    </article>
  );
}

export default Menu;