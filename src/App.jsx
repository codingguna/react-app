import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();

  const username = e.target.username.value;
  const password = e.target.password.value;

  // Simulate API login
  if (username === 'admin' && password === '1234') {
    // success message to Flutter
    window.FlutterChannel?.postMessage(JSON.stringify({
      status: 'success',
      message: 'Login succeeded',
      token: 'abc123'
    }));
  } else {
    // error message to Flutter
    window.FlutterChannel?.postMessage(JSON.stringify({
      status: 'error',
      message: 'Invalid credentials'
    }));
  }
};

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
