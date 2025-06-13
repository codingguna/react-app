import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const sendMessageToFlutter = (status, message = "") => {
    const data = { status, message };
    if (window.FlutterChannel) {
      window.FlutterChannel.postMessage(JSON.stringify(data));
    } else {
      console.warn("FlutterChannel not available");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fake API simulation
    if (username === 'admin' && password === '1234') {
      sendMessageToFlutter("success");
    } else {
      sendMessageToFlutter("error", "Invalid username or password");
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
