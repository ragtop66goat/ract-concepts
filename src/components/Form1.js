import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export function Form1() {
  const user = useContext(UserContext);
  const array = [1, 2, 3];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted ", new FormData(e.target).get("text"));
  };

  function print(number) {
    console.log("Number ", number);
  }

  function doubler(number) {
    return () => {
      console.log("Double", number * 2);
    };
  }

  return (
    <>
      <h1>{user.firstName}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" defaultValue="initial" />
        <button>Subimt</button>
      </form>
      {array.map((number) => {
        return (
          <button key={number} onClick={() => print(number)}>
            Print {number}
          </button>
        );
      })}
      {array.map((number) => {
        return (
          <button key={number} onClick={doubler(number)}>
            Double {number}
          </button>
        );
      })}
    </>
  );
}
