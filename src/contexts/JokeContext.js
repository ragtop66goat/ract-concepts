import { createContext, useState } from "react";

const JokeContext = createContext();

export function JokeProvider({ children }) {
  const [joke, setJoke] = useState("Joke");

  return (
    <JokeContext.Provider value={[joke, setJoke]}>
      {children}
    </JokeContext.Provider>
  );
}

export default JokeContext;
