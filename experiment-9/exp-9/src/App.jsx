import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  // useEffect Hook
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (name === "" || email === "" || password === "") {
      alert("All fields are required!");
      return;
    }

    setMessage("Registration Successful!");

    // Add registered user
    const newUser = {
      id: users.length + 1,
      name: name,
      email: email,
    };

    setUsers([...users, newUser]);

    // Clear fields
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>

        {message && <h2 className="success">{message}</h2>}

        {users.length > 0 && (
          <div className="users-box">
            <h2>Registered Users</h2>

            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;