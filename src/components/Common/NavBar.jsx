import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <ul id="nav-bar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/users">User</Link>
        </li>
      </ul>
    </nav>
  );
}
