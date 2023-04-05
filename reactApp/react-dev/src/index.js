import React from "react";
import ReactDOM from "react-dom";
import data from "../data/recipes.json";
import Menu from "./components/Menu";

ReactDOM.render(<Menu recipes={data}></Menu>, document.getElementById("root"));