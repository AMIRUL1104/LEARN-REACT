import TotalUserCount from "./TotalUserCount";
import AddUser from "./AddUser";
import PropTypes from "prop-types";
function MenuBar({
  addedUsers,
  onSetAddedUsers,
  currentAddedUsers,
  onAddUser,
}) {
  return (
    <section className=" mt-4 flex align-middle justify-evenly border-b-2 pb-4 ">
      <TotalUserCount currentAddedUsers={currentAddedUsers} />
      <AddUser
        currentAddedUsers={currentAddedUsers}
        addedUsers={addedUsers}
        onSetAddedUsers={onSetAddedUsers}
        onAddUser={onAddUser}
      />
    </section>
  );
}
MenuBar.propTypes = {
  currentAddedUsers: PropTypes.array.isRequired,
  addedUsers: PropTypes.number,
  onSetAddedUsers: PropTypes.func.isRequired,
  onAddUser: PropTypes.func.isRequired,
};

export default MenuBar;
