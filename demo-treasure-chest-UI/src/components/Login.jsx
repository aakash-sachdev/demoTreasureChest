import React, { useState } from "react";
import axios from "axios";

function Login({ setAuthenticated, isDarkMode  }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/user/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );
      setAuthenticated(true);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  const containerStyle = {
    backgroundColor: isDarkMode ? "#121212" : "#ffffff",
    color: isDarkMode ? "#ffffff" : "#000000",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    margin: "auto",
    boxShadow: isDarkMode
      ? "0 2px 10px rgba(255, 255, 255, 0.1)"
      : "0 2px 10px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s, color 0.3s",
  };


  const inputStyle = {
    backgroundColor: isDarkMode ? "#333" : "#f9f9f9",
    color: isDarkMode ? "#ffffff" : "#000000",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px 0",
    width: "100%",
  };

  const buttonStyle = {
    backgroundColor: isDarkMode ? "#1a73e8" : "#007bff",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    width: "100%",
    transition: "background-color 0.3s",
  };

  return (
    <div style={containerStyle}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          style={inputStyle}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Username"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button type="submit">Login</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default Login;