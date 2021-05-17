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
  );
}

export default Row
