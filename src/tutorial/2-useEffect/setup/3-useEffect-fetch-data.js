import React, { useState, useEffect } from "react";
import "./style.css";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const fetchedUsers = await fetch(url);
    const fetchedUsersJSON = await fetchedUsers.json();
    setUsers(fetchedUsersJSON);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <React.Fragment>
      {users.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <h3 style={{ marginBottom: "4rem" }}>Github Users</h3>
      )}

      <div className="parent">
        {users.map((user) => (
          <div key={user.id} className="child">
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <h4>{user.login}</h4>
              <a href={user.html_url}>Profile</a>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default UseEffectFetchData;
