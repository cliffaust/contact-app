import React from "react";

function UserItems(props) {
  return (
    <div className="user-items">
      <div>
        <h4>Username</h4> <span className="text">{props.user.username}</span>
      </div>
      <div>
        <h4>Email</h4> <span className="text">{props.user.email}</span>
      </div>
      <div>
        <h4>Country</h4> <span className="text">{props.user.country}</span>
      </div>
      <div className="submit">
        <button className="update-btn"> Update</button>
        <button
          className="delete-btn"
          onClick={() => {
            props.delete(props.user.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserItems;
