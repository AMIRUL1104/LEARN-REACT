import { useReducer } from "react";

const initialState = { count: 1, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + state.step,
      };

    case "DECREMENT":
      console.log(state.step);
      return {
        ...state,
        count: state.count - state.step,
      };

    case "setStep":
      console.log(state.step);
      return {
        ...state,
        step: action.step,
      };
    default:
      return state;
  }
}

function PracticeTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className=" practiceBox">
      <h1>PracticeTwo</h1>

      <div>
        <label htmlFor="step">Step</label>{" "}
        <input
          type="number"
          name=""
          id="step"
          onChange={(e) =>
            dispatch({ type: "setStep", step: Number(e.target.value) })
          }
        />
      </div>

      <h2>{state.count}</h2>
      <div>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "INCREMENT",
              step: state.step,
            })
          }
        >
          +
        </button>

        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "DECREMENT",
              step: state.step,
            })
          }
        >
          -
        </button>
      </div>
    </div>
  );
}

export default PracticeTwo;

// import { useReducer, useState } from "react";

// const initialState = { count: 1, step: 1 };

// function reducer(state, action) {
//   console.log(state.count);
//   console.log(state.step);

//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         ...state,
//         count: state.count + Number(action.step),
//         step: state.step,
//       };

//     case "DECREMENT":
//       return {
//         ...state,
//         count: state.count - Number(action.step),
//         step: state.step,
//       };
//     default:
//       return state;
//   }
// }

// function PracticeTwo() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [step, setStep] = useState(1);
//   console.log(step);

//   return (
//     <div className=" practiceBox">
//       <h1>PracticeTwo</h1>

//       <div>
//         <label htmlFor="step">Step</label>{" "}
//         <input
//           type="number"
//           name=""
//           id="step"
//           onChange={(e) => setStep(e.target.value)}
//           value={step}
//         />
//       </div>

//       <h2>{state.count}</h2>
//       <div>
//         <button
//           type="button"
//           onClick={() =>
//             dispatch({
//               type: "INCREMENT",
//               step: step,
//             })
//           }
//         >
//           +
//         </button>

//         <button
//           type="button"
//           onClick={() =>
//             dispatch({
//               type: "DECREMENT",
//               step: step,
//             })
//           }
//         >
//           -
//         </button>
//       </div>
//     </div>
//   );
// }

// export default PracticeTwo;
