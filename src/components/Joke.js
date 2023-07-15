import { useContext } from "react";
import JokeContext from "../contexts/JokeContext";

export function Joke() {
  const joke = useContext(JokeContext);
  const setJoke = useContext(JokeContext);

  function newJoke() {
    setJoke("new Joke");
  }

  return (
    <>
      <h2>Need a laugh? Get a joke</h2>
      <div>{joke}</div>
      <button onClick={() => newJoke}>Get Joke</button>
    </>
  );
}
