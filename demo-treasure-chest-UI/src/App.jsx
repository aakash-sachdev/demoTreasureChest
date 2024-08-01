import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MemoryPage } from './components/MemoryPage';
import { MemoryDetail } from './components/MemoryDetail';
import Quote from './components/Quote';
import Register from './routes/Register';
import Login from './routes/Login';
import { fetchMemories } from './services/memoryService';
import Layout from './components/Layout';
import { AuthProvider } from './context/AuthContext';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    fetchMemories()
      .then(setMemories)
      .catch((error) => {
        console.error("There was an error fetching the memories!", error);
      });
  }, []);

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    console.log("User logged in:", username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("User logged out");
  };

  const router = createBrowserRouter([
    {
      element: <Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout} />,
      children: [
        { path: "/", element: <MemoryPage memories={memories} setMemories={setMemories} /> },
        { path: "/memory/:memoryId", element: <><Quote /><MemoryDetail memories={memories} /></> },
        { path: "/login", element: <Login onLogin={handleLogin} /> },
        { path: "/register", element: <Register/> },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
