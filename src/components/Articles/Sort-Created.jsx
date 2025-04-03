export default function SortByCreated({ setAge }) {
  function handleSortByAge(event) {
    event.preventDefault();
    setAge(event.target.value);
  }
  return (
    <form className="Articles-Filter">
      <label htmlFor="default">Sory by Age: </label>
      <select onChange={handleSortByAge} name="article-filter" id="filter">
        <option key="new" value="dec">
          Newest
        </option>
        <option key="old" value="asc">
          Oldest
        </option>
      </select>
    </form>
  );
}
