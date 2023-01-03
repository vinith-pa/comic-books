import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar";
import anything from "./Components/Navbar";
import something from "./Components/Main";

ReactDOM.render(<Navbar />, document.getElementById("root"));

const marvelComics = require("./marvel.json");

console.log(marvelComics);

console.log(marvelComics.etag);

console.log(marvelComics.data.results[0].characters.items.length);
