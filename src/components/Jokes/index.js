import axios from "axios";
import { useEffect, useState } from "react";
import JokesList from "../JokesList";
import JokesStyle from "./Jokes.module.css";
import Loading from "../../image/giphy.gif";

const Jokes = () => {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    getJokes();
  }, []);

  const getJokes = () => {
    axios
      .get("https://icanhazdadjoke.com/search?limit=10", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        // console.log(res.data.results);
        let newData = res.data.results.map((item) => ({ ...item, vote: 0 }));
        setJoke(newData);
      });
  };

  const updateJokeVote = (jIndex, jVote) => {
    let oldJoke = [...joke];

    oldJoke[jIndex].vote = jVote;

    oldJoke.sort((a, z) => z.vote - a.vote);

    setJoke(oldJoke);
  };

  if (!joke) {
    return <img src={Loading} alt="icon" />;
  }

  return (
    <div className={JokesStyle.jokes}>
      <div className={JokesStyle.jokes_left_side}>
        <h1 className={JokesStyle.jokes_title}>
          <span>Dad</span> Jokes
        </h1>
        <img
          src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
          alt="..."
        />
      </div>
      <div className={JokesStyle.jokes_list}>
        {joke?.map((item, index) => (
          <JokesList
            key={`joke-id-${item.id}`}
            {...item}
            updateJokeVote={updateJokeVote}
            jokesIndex={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Jokes;
