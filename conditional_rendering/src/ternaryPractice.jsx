// import { useState } from "react";
// function TernaryPractice() {
//   const [theme, setTheme] = useState(false);
//   const handleTheme = () => {
//     setTheme(theme ? false : true);

//     let parent = document.getElementById("parent");
//     parent.style.backgroundColor = theme ? "red" : "blue";
//   };
//   return (
//     <div
//       id="parent"
//       style={{
//         margin: "10px auto",
//         width: "100px",
//         height: "100px",
//         backgroundColor: "blue",
//         transition: "background-color 0.3s ease",
//       }}
//     >
//       <button type="submit" onClick={handleTheme}>
//         Button
//       </button>
//     </div>
//   );
// }

// export default TernaryPractice;

// import { useState } from "react";
// function TernaryPractice() {
//   const [theme, setTheme] = useState(false);
//   const handleTheme = () => {
//     setTheme((prev) => !prev);

//     // let parent = document.getElementById("parent");
//     // parent.style.backgroundColor = theme ? "red" : "blue";
//   };
//   return (
//     <div
//       id="parent"
//       style={{
//         margin: "10px auto",
//         width: "100px",
//         height: "100px",
//         backgroundColor: theme ? "red" : "blue",
//         transition: "background-color 0.3s ease",
//       }}
//     >
//       <button type="submit" onClick={handleTheme}>
//         Button
//       </button>
//     </div>
//   );
// }

// export default TernaryPractice;

import { useState } from "react";
function TernaryPractice() {
  const [theme, setTheme] = useState(false);
  // const parentRef = useRef(null);

  const handleTheme = () => {
    setTheme((prev) => !prev);
  };

  // useEffect(() => {
  //   if (parentRef.current) {
  //     // parentRef.current.style.backgroundColor = theme ? "red" : "blue";
  //   }
  // }, [theme]);
  return (
    <div
      id="parent"
      style={{
        margin: "10px auto",
        width: "100px",
        height: "100px",
        backgroundColor: theme ? "red" : "blue",
        transition: "background-color 0.3s ease",
      }}
    >
      <button type="submit" onClick={handleTheme}>
        Button
      </button>
    </div>
  );
}

export default TernaryPractice;
