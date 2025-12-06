import { useState } from "react";

function Interactive_Form_System() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();

    // যদি কোন field খালি থাকে
    if (!name || !email) {
      alert("সব ফিল্ড পূরণ করুন");
      return;
    }
    setFormData(
      <div>
        <h3>Name : {name}</h3>
        <p>Email : {email} </p>
      </div>
    );
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h1 className=" text-3xl">Interactive_Form_System</h1>
      <form
        onSubmit={handleSubmit}
        action=""
        className=" bg-gray-800 text-amber-50 m-5 border-2 rounded-2xl p-2.5 flex justify-evenly items-center flex-col "
      >
        <label htmlFor="name" className=" text-left">
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" border-2 rounded-2xl p-1.5 ml-2.5 "
          />
        </label>
        <br />
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" border-2 rounded-2xl p-1.5 ml-2.5"
          />
        </label>

        <br />
        <button
          type="submit"
          className=" bg-amber-50 w-64 text-gray-950 border-2 rounded-2xl  p-1.5 hover:bg-gray-950 hover:text-amber-50 hover:border-2"
        >
          Submit
        </button>
      </form>
      {formData}
    </div>
  );
}

export default Interactive_Form_System;
