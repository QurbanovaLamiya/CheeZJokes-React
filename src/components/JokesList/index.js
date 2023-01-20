import JokesListStyle from "./JokesList.module.css";

import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { useState } from "react";

const JokesList = ({ joke }) => {
  const [vote, setVote] = useState(0);

  const inreaseVote = () => {
    setVote((prev) => prev + 1);
  };

  const decreaseVote = () => {
    setVote((prev) => (prev <= 0 ? 0 : prev - 1));
  };

  return (
    <div className={JokesListStyle.joke_list}>
      <div className={JokesListStyle.joke_buttons}>
        <span className={JokesListStyle.up} onClick={inreaseVote}>
          <FaArrowUp />
        </span>
        <span className={JokesListStyle.joke_count}>{vote}</span>
        <span className={JokesListStyle.down} onClick={decreaseVote}>
          <FaArrowDown />
        </span>
      </div>
      <div className={JokesListStyle.joke_content}>
        <p className={JokesListStyle.joke_text}>{joke}</p>
        <span className={JokesListStyle.joke_icon}>
          <i className="em em-angry"></i>
        </span>
      </div>
    </div>
  );
};

export default JokesList;
