import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from 'react-router-dom';
import { MemoryPage } from './components/MemoryPage';
import { MemoryDetail } from './components/MemoryDetail';
import Quote from './components/Quote';
import Navigation from './components/Navigation';
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import { fetchMemories } from './services/memoryService';
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const memoriesData = await fetchMemories();
        setMemories(memoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  const handleSearch = (query) => {
    setMemories((prevMemories) =>
      prevMemories.filter((memory) =>
        memory.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <Router>
      <Navigation isLoggedIn={authenticated} handleLogout={() => setAuthenticated(false)} handleSearch={handleSearch} />
      <nav>
        {!authenticated ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/">Memories</Link>
            <Link to="/logout">Logout</Link>
          </>
        )}
      </nav>
      <div className="App">
        <header className="App-header">
          <Routes>
            {/* Public Routes */}
            <Route
              path="/login"
              element={<Login setAuthenticated={setAuthenticated} />}
            />
            <Route path="/register" element={<Register />} />

            {/* Private Routes */}
            {authenticated ? (
              <>
                <Route path="/" element={<MemoryPage memories={memories} setMemories={setMemories} />} />
                <Route path="/memory/:memoryId" element={<><Quote /><MemoryDetail memories={memories} /></>} />
                <Route
                  path="/logout"
                  element={<Logout setAuthenticated={setAuthenticated} />}
                />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" replace />} />
            )}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
