import { useReducer } from "react";
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function PracticeOne() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="practiceBox">
      <h1>PracticeOne</h1>
      <h2>{state.count}</h2>
      <div>
        <button type="button" onClick={() => dispatch({ type: "INCREMENT" })}>
          +
        </button>
        <button type="button" onClick={() => dispatch({ type: "DECREMENT" })}>
          -
        </button>
      </div>
    </div>
  );
}

export default PracticeOne;
