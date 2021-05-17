import Login from "./Login";
import Nav from "./Nav";
import useToken from "./useToken";

const About = (props) => {
  const { setToken } = useToken();
  debugger

  const handleLogout = () => {
    setToken(null);
    <Login setToken={null} />
    props.history.push("/")
  }
  return (
    <>
      <Nav handleLogout={handleLogout} />
      <br />
      <br />
      <br />
      <br />
      <div>About aa</div>
    </>
  )
}

export default About;
