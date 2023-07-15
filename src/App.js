import { Form1 } from "./components/Form1";
import { Counter } from "./components/Counter";
import "./App.css";
import { RenderCount } from "./components/RenderCount";
import { UserProvider } from "./contexts/UserContext";
import { Joke } from "./components/Joke";
import { JokeProvider } from "./contexts/JokeContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserProvider>
          <Form1 />
          <Counter />
          <RenderCount />
          <JokeProvider>
            <Joke />
          </JokeProvider>
        </UserProvider>
      </header>
    </div>
  );
}

export default App;
