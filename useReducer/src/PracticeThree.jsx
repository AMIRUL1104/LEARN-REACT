import { useReducer } from "react";
const initialState = [
  {
    id: 1,
    title: "Learn useReducer",
    status: "pending", // pending | completed
  },
  {
    id: 2,
    title: "Practice reducer logic",
    status: "completed",
  },
  {
    id: 3,
    title: "Build mini task app",
    status: "pending",
  },
];

function reducer(state, action) {
  const actionId = Number(action.id);

  const updated = state.map((item) => {
    const newstatus = item.status === "pending" ? "completed" : "pending";

    if (item.id === actionId) {
      return {
        ...item,
        status: newstatus,
      };
    }

    return item;
  });
  return updated;
}

function PracticeThree() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="practiceBox">
      <h1>PracticeThree</h1>

      <div>
        {state.map((item) => {
          return (
            <div key={item.id} id={item.id} className="practiceBox">
              <h3>{item.title} </h3>
              <p>
                {" "}
                status {item.status}
                <button
                  type="button"
                  id={item.id}
                  onClick={(e) =>
                    dispatch({
                      id: e.target.id,
                    })
                  }
                >
                  {item.status === "pending"
                    ? "Mark as Completed"
                    : "Mark as Pending"}
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PracticeThree;
