import { useState } from "react";

function FormOne() {
  const [users, setUsers] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });
  // console.log(userInfo);
  console.log(users);

  const handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    setUserInfo({ ...userInfo, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = userInfo.name;
    const email = userInfo.email;
    const newUser = {
      id: crypto.randomUUID(),
      name,
      email,
    };
    // const usersCopy = users;
    setUsers([...users, newUser]);

    setUserInfo({ name: "", email: "" });
  };
  return (
    <div>
      <h1 className=" text-center text-3xl font-bold capitalize underline ">
        form One
      </h1>

      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-center justify-evenly bg-slate-600  border-2 w-3/4 rounded-2xl p-2.5 mx-auto my-4"
      >
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
          placeholder="Enter Name"
          className="  border-2 bg-amber-50 border-amber-50 rounded-2xl p-1 w-3/4  "
        />
        <br />
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          placeholder="Enter Email"
          className=" bg-amber-50 border-amber-50 border-2 rounded-2xl p-1  w-3/4"
        />

        <button
          type="submit"
          className=" border-2 rounded-2xl w-3/4 my-3.5 border-amber-50 text-white capitalize font-bold"
        >
          submit
        </button>
      </form>

      <ul className=" border-2 text-black w-3/4 mx-auto rounded-2xl">
        {users.length === 0 ? (
          <p>no users found</p>
        ) : (
          users.map((user) => (
            <li
              key={user.id}
              className=" p-2.5 bg-sky-700 rounded-2xl text-white m-3.5"
            >
              <p>Name : {user.name}</p>
              <p>Email : {user.email}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default FormOne;
