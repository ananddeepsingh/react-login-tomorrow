import jsonData from '../data.json';
import { useState } from 'react';
import Login from './Login';
import useToken from './useToken';
import Nav from './Nav';

const Dashboard = (props) => {
  const [value, setValue] = useState("");
  const [filterData, setFilterData] = useState(jsonData);
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  const Row = (props) => {
    const { username, image } = props.item;

    return (
      <div className="row">
        <div className="user-image">
          <img alt="" src={`data:image/jpeg;base64,${image}`} />
        </div>
        <div className="user-details">
          <p>{username}</p>
        </div>
      </div>
    )
  }

  const renderUsers = () => {
    let results = [];
    console.log(filterData, "filterData")
    filterData.map((item, i) => results.push(<Row item={item} key={i} />));
    return results;
  }

  const handleSearchUser = (e) => {
    e.preventDefault();

    if (e.target.value) {
      setValue(e.target.value);
      setFilterData(jsonData.filter(o => o.username.toLowerCase().includes(e.target.value.toLowerCase())));
    } else {
      setValue("");
      setFilterData(jsonData);
    }
  }

  const renderSearchBox = () => {
    return (
      <>
        <Nav handleLogout={handleLogout} />
        <div className="search-box">
          <input type="text" value={value} placeholder="Search User" onChange={(e) => handleSearchUser(e)} />
        </div>
        <div className="start-date">

        </div>
      </>
    )
  }

  const handleLogout = () => {
    setToken(null);
    <Login setToken={null} />
    props.history.push("/")
  }

  return (
    <div className="App">
      {renderSearchBox()}
      <div id="userWrapper">
        {renderUsers()}
      </div>
    </div>
  );
}

export default Dashboard;
