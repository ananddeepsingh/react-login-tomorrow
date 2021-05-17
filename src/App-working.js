import logo from './logo.svg';
import './App.css';
import jsonData from './data.json';
import { useState } from 'react';



function App() {

  const [value, setValue] = useState("");

  const Row = (props) => {
    // console.log(props.item)
    const { username, image } = props.item;
    return (
      <div>
        <h1>{username}</h1>
        <img alt="" src={`data:image/jpeg;base64,${image}`} />
      </div>
    )
  }

  const renderUsers = (jsonData) => {
    let results = [];
    jsonData.map((item, i) => results.push(<Row item={item} key={i} />));
    return results;
  }

  const handleSearchUser = (e) => {
    e.preventDefault();
    const serachedObject = jsonData.filter(o => o.username.includes(e.target.value));
    return renderUsers(serachedObject)
  }

  const renderSearchBox = () => {

    return (
      <div>
        {/* <input type="text" value="" placeholder="Please Search" onChange={(e) => handleSearchUser(e)} /> */}
        <input type="text" value={value} placeholder="Please Search" onChange={e => setValue(e.target.value)} />
      </div>
    )
  }

  return (
    <div className="App">
      {renderSearchBox()}
      {/* {renderUsers(jsonData)} */}
      {jsonData
        .filter(item => {
          if (!value) return true;
          if (item.username.includes(value)) return true
          return false;
        })
        .map(item => (
          <div>
            <h1>{item.username}</h1>
            <img alt="" src={`data:image/jpeg;base64,${item.image}`} />
          </div>
        ))}
    </div>
  );
}

export default App;
