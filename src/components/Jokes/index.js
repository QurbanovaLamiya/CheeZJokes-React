import JokesStyle from "./Jokes.module.css";

const Jokes = () => {
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
      <div className={JokesStyle.jokes_list}></div>
    </div>
  );
};

export default Jokes;
