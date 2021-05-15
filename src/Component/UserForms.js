import React, { useState } from "react";

function UserForms(props) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
  });

  function handleOnChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    if (user.username && user.password) {
      let userId = 10000 + Math.random() * 10000000;
      let userData = { ...user, id: userId };
      props.addUser(userData);
    }
  }
  return (
    <div className="user-form-container">
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleOnChange}
          />
        </div>{" "}
        <br></br>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleOnChange}
          />
        </div>
        <br></br>
        <div>
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={user.country}
            onChange={handleOnChange}
          />
        </div>{" "}
        <br></br>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleOnChange}
          />
        </div>{" "}
        <br></br>
        <div>
          <button type="button" className="btn" onClick={handleSubmit}>
            Create User
          </button>
        </div>
      </form>
    </div>
  );
}
export default UserForms;
