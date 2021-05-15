import React, { useState, useEffect } from "react";
import loader from "./Spinner.gif";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchUser = async () => {
    try {
      const fetchedUser = await fetch(url);
      if (fetchedUser.status >= 200 && fetchedUser.status <= 299) {
        const fetchedUserJSON = await fetchedUser.json();
        setUser(fetchedUserJSON);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
        throw new Error(fetchedUser.statusText);
      }
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) return <img src={loader} alt="Loader" />;

  if (error) return <h1>Error...</h1>;

  return <h1>{user.login}</h1>;
};

export default MultipleReturns;
