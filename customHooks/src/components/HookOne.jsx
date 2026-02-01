import useHooksOne from "./useHooksOne";
function HookOne() {
  const [value, setValue] = useHooksOne("stored", "initial value");
  console.log(value);
  //   console.log(setValue);

  return (
    <div>
      <h1>HookOne </h1>
      <h3>{value}</h3>
      <button onClick={() => setValue("amirul islam")}>Add</button>
      {/* <pre>{JSON.stringify(value, null, 2)}</pre> */}
    </div>
  );
}

export default HookOne;
