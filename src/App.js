
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Authenticator>
          <h1>Welcome, {user.username}</h1>
          <button onClick={signOut}>Sign Me Out</button>
        </Authenticator>
      )}
    </Authenticator>
  )
};

export default App;
