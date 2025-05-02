import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Email Automation Dashboard</h1>
      <div>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          users.map((user) => (
            <div key={user._id} className="border p-4 mb-2">
              <p>Email: {user.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
// Compare this snippet from client/index.js: