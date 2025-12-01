function Button({ message, children }) {
  function handleClick(event) {
    console.log(message);
    console.log(event.target);
  }
  return (
    <button
      onClick={(event) => handleClick(event, message)}
      //   message={message}
      //   children={children}
      className=" bg-purple-600 text-white p-1 rounded cursor-pointer"
    >
      {children}
    </button>
  );
}
export default Button;
