import { useNavigate } from "react-router";

export default function SortByCreated({ filter, setAge }) {
  const navigate = useNavigate();
  function handleSortByAge(event) {
    event.preventDefault();
    setAge(event.target.value);

    navigate(`/articles?topic=${filter}&order=${event.target.value}`);
  }
  return (
    <form className="Articles-Filter">
      <label htmlFor="default">Sory by Age: </label>
      <select onChange={handleSortByAge} name="article-filter" id="filter">
        <option key="new" value="desc">
          Newest
        </option>
        <option key="old" value="asc">
          Oldest
        </option>
      </select>
    </form>
  );
}
