import Header from "./Header.jsx";
import MenuBar from "./MenuBar.jsx";
import UserCards from "./UserCards.jsx";
import { useState } from "react";

function UserFlow() {
  const [addedUsers, setAddedUsers] = useState("");
  const [currentAddedUsers, setCurrentAddedUsers] = useState([]);
  const users = [
    { id: 1, fullName: "Rahim Uddin", age: 22, occupation: "Student" },
    { id: 2, fullName: "Karim Ali", age: 28, occupation: "Developer" },
    { id: 3, fullName: "Nusrat Jahan", age: 24, occupation: "Designer" },
    { id: 4, fullName: "Sabbir Khan", age: 30, occupation: "Teacher" },
    {
      id: 5,
      fullName: "Tanu Akter",
      age: 26,
      occupation: "Marketing Specialist",
    },
  ];
  console.log(currentAddedUsers);

  const handleUser = (addedUsers) => {
    if (addedUsers === false) {
      return;
    }
    const user = users.find((u) => u.id === addedUsers);
    console.log(user);

    setCurrentAddedUsers((previous) => {
      return [...previous, user];
    });
  };

  return (
    <>
      <Header />
      <MenuBar
        currentAddedUsers={currentAddedUsers}
        addedUsers={addedUsers}
        onSetAddedUsers={setAddedUsers}
        onAddUser={handleUser}
      />
      <UserCards currentAddedUsers={currentAddedUsers} />
    </>
  );
}
export default UserFlow;
