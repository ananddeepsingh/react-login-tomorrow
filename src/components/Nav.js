import {
  Link
} from "react-router-dom";
import Login from "./Login";
import useToken from "./useToken";

const Nav = (props) => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  // const handleLogout = (props) => {
  //   console.log(props);
  //   setToken(null);
  //   return <Login setToken={null} />
  // }

  return (
    <nav>
      <ul>
        <li><Link to="/dashboard">Home</Link> | <Link to="/about">About</Link></li>
        <li className="last-nav"><button to="/" style={{ background: "red", color: "#fff", border: 0, padding: "10px", cursor: "pointer" }} onClick={props.handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
}

export default Nav;
