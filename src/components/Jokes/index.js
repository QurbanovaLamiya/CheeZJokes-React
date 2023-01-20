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
        setJoke(res.data.results);
      });
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
        <button>Fetch Jokes</button>
      </div>
      <div className={JokesStyle.jokes_list}>
        {joke?.map((item) => (
          <JokesList key={`joke-id-${item.id}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Jokes;
