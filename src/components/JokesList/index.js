import JokesListStyle from "./JokesList.module.css";

import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

import { useState } from "react";

const JokesList = ({ joke, updateJokeVote, jokesIndex }) => {
  const [vote, setVote] = useState(0);

  const inreaseVote = (jIndex) => {
    updateJokeVote(jIndex, vote + 1);
    setVote((prev) => prev + 1);
  };

  const decreaseVote = (jIndex) => {
    updateJokeVote(jIndex, vote - 1);
    setVote((prev) => prev - 1);
  };

  const getColor = () => {
    if (vote >= 15) {
      return "#4CAF50";
    } else if (vote >= 12) {
      return "#8BC34A";
    } else if (vote >= 9) {
      return "#CDDC39";
    } else if (vote >= 6) {
      return "#FFEB3B";
    } else if (vote >= 3) {
      return "#FFC107";
    } else if (vote >= 0) {
      return "#FF9800";
    } else {
      return "#f44336";
    }
  };

  const getEmoji = () => {
    if (vote >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (vote >= 12) {
      return "em em-laughing";
    } else if (vote >= 9) {
      return "em em-smiley";
    } else if (vote >= 6) {
      return "em em-slightly_smiling_face";
    } else if (vote >= 3) {
      return "em em-neutral_face";
    } else if (vote >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  };

  return (
    <div className={JokesListStyle.joke_list}>
      <div className={JokesListStyle.joke_buttons}>
        <span
          className={JokesListStyle.up}
          onClick={() => inreaseVote(jokesIndex)}
        >
          <FaArrowUp />
        </span>
        <span
          className={JokesListStyle.joke_count}
          style={{ borderColor: getColor() }}
        >
          {vote}
        </span>
        <span
          className={JokesListStyle.down}
          onClick={() => decreaseVote(jokesIndex)}
        >
          <FaArrowDown />
        </span>
      </div>
      <div className={JokesListStyle.joke_content}>
        <p className={JokesListStyle.joke_text}>{joke}</p>
        <span className={JokesListStyle.joke_icon}>
          <i className={getEmoji()}></i>
        </span>
      </div>
    </div>
  );
};

export default JokesList;
