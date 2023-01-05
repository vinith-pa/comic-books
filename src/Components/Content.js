import data from "../marvel.json";
import { useState } from "react";

const Comics = () => {
  const [comics, setComics] = useState([data]);
  return (
    <main>
      {comics.map((comic) => (
        <a href={comic.data.results[0].urls[0].url}>
          <p>{comic.data.results[0].title}</p>
        </a>
      ))}
    </main>
  );
};
export default Comics;
