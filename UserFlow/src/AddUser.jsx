function getRandomId() {
  return Math.floor(Math.random() * 5) + 1;
}

function AddUser({
  addedUsers,
  onSetAddedUsers,
  currentAddedUsers,
  onAddUser,
}) {
  // Generates a unique random user ID between 1–5
  function generateUniqueId() {
    const randomId = getRandomId();

    // If no users added → the random ID is valid
    if (currentAddedUsers.length === 0) {
      return randomId;
    }

    // Check if this ID already exists
    const exists = currentAddedUsers.some((u) => u.id === randomId);

    if (!exists) {
      return randomId; // Unique → return
    }

    // Collision → generate again
    return generateUniqueId();
  }

  // Button click handler
  function handleClick() {
    const uniqueId = generateUniqueId();
    const updated = onAddUser(uniqueId);
    onSetAddedUsers(updated);
  }

  return (
    <button
      value={addedUsers}
      onClick={handleClick}
      className="w-10 h-10 text-2xl bg-black text-white border-4 border-s-2 border-t-neutral-500 rounded-2xl transition-all hover:bg-lime-50 hover:text-black"
    >
      +
    </button>
  );
}

export default AddUser;
