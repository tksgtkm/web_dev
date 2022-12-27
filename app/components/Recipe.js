import React from "react";

export default function Recipe({name, ingredients, steps}) {
  return (
    <section id="backed-salmon">
      <h1> {name} </h1>
      <ul className="ingredients">
        {ingredients.map((ingredients, i) => (
          <li key={i}> {ingredients.name} </li>
        ))}
      </ul>
      <section className="instructions">
        <h2>Cooking Instructions</h2>
        {steps.map((step, i) => (
          <p key={i}> {step} </p>
        ))}
      </section>
    </section>
  );
}
