import PropTypes from "prop-types";

function UserBox({ currentAddedUsers }) {
  console.log(currentAddedUsers);

  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 w-[90%] my-8">
      {currentAddedUsers.map((user) => (
        <div
          key={user.id || user.fullName}
          className="rounded-2xl border-2 border-solid border-slate-400 shadow-2xl p-5 text-left transition-all"
        >
          <h2 className="text-3xl">Name: {user.fullName}</h2>
          <p className="text-gray-600">Age: {user.age}</p>
          <p className="text-gray-600">Occupation: {user.occupation}</p>
        </div>
      ))}
    </section>
  );
}

UserBox.propTypes = {
  currentAddedUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      fullName: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      occupation: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserBox;
