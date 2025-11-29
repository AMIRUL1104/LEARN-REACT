function TotalUserCount({ currentAddedUsers }) {
  return (
    <h3 className=" border-2 border-gray-600 rounded-2xl py-2 px-5 ">
      Total Users : {currentAddedUsers.length}
    </h3>
  );
}

export default TotalUserCount;
