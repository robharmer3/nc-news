import { useContext } from "react";
import { UserContext } from "../context/User";

export default function User() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h2>User</h2>
      <section className="User">
        <h3>Welcome {user.username}</h3>
        <img src={user.avatar_url} alt={user.username} />
        <ul>
          <li>{user.name}</li>
          <li>
            <p>Article posted info...</p>
          </li>
          <li>
            <p>Number of comments posted info....</p>
          </li>
        </ul>
      </section>
    </>
  );
}
