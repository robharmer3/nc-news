import { useNavigate } from "react-router";

export default function FilterByTopics({ topics, filter, setFilter, setPage }) {
  const navigate = useNavigate();
  function handleFilter(event) {
    event.preventDefault();
    setFilter(event.target.value);
    navigate(`/articles?topic=${event.target.value}`);
    setPage(1);
  }
  return (
    <form className="Articles-Filter">
      <label htmlFor="default">Filter by Topic: </label>
      <select onChange={handleFilter} name="article-filter" id="filter">
        <option key="all" value="">
          --Please Select--
        </option>
        {topics.map((topic) => {
          return (
            <option
              key={topic.slug}
              type="radio"
              name="article-filter"
              id={topic.slug}
              value={topic.slug}
            >
              {topic.slug}
            </option>
          );
        })}
      </select>
    </form>
  );
}
