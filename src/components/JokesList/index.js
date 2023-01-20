import JokesListStyle from "./JokesList.module.css";

import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const JokesList = ({ joke }) => {
  return (
    <div className={JokesListStyle.joke_list}>
      <div className={JokesListStyle.joke_buttons}>
        <span className={JokesListStyle.up}>
          <FaArrowUp />
        </span>
        <span className={JokesListStyle.joke_count}>0</span>
        <span className={JokesListStyle.down}>
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
