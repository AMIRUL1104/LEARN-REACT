function Premium({ isPremium, onSetIsPremium }) {
  return (
    <form className="mb-3.5">
      <input
        type="checkbox"
        checked={isPremium}
        onChange={(event) => {
          onSetIsPremium(event.target.checked);
        }}
        name="premium"
        id="premium"
      />
      <label htmlFor="premium">show primium only</label>
    </form>
  );
}

export default Premium;
