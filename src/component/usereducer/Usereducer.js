import React, { useReducer } from "react";

export default function Usereducer() {
  let currentState = { Sum: 0 };
  let reducer = (state, action) => {
    if (action.type === "inc") {
      return { Sum: state.Sum + 1 };
    } else if (action.type === "dic") {
      return { Sum: state.Sum - 1 };
    }
  };
  let [state, dispatch] = useReducer(reducer, currentState);
  return (
    <>
      <h1>My no is {state.Sum}</h1>
      <button onClick={() => dispatch({ type: "inc" })}>Add +</button>
      <button onClick={() => dispatch({ type: "dic" })}>min -</button>
    </>
  );
}
