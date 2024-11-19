import React, { useContext } from 'react';
import { AppState } from '../../App';

function Home() {
  const { user } = useContext(AppState); // Destructure user from the context

  return (
    <div>
      <h1>Home</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Welcome: {user?.username || "Guest"}</h2>
    </div>
  );
}

export default Home;
