import { useEffect, useRef, useState } from "react";

export function RenderCount() {
  const [name, setName] = useState("");
  const rendered = useRef(1);
  const inputRef = useRef();

  useEffect(() => {
    rendered.current += 1;
  });

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <h1>I'm from the RenderCount Comp</h1>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>My name is</h3>
      <button onClick={focus}>Focus on input</button>
      <h4>I've rendered {rendered.current} times</h4>
    </>
  );
}
