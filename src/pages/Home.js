import React, { useContext } from 'react';
import { login } from '../login';
import { UserContext } from '../UserContext';

function Home() {
  const {user, setUser} = useContext(UserContext);

  return(
    <div>
      <h1>Home Page of useContext</h1>

      <p>Welcome <strong>{JSON.stringify(user, null, 2)}</strong>.</p>

      {
        user === "Guest" ? <button onClick={async () => {
          const user = await login();
          setUser(user);
        }}>Login</button> : <button onClick={() => {setUser('Guest')}}>Logout</button>
      }
    </div>
  );
}

export default Home;