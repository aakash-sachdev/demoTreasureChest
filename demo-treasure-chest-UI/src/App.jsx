import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { MemoryPage } from './components/MemoryPage';
import { MemoryDetail } from './components/MemoryDetail';
import Quote from './components/Quote';
import Registration from './components/Registration';
import Login from './components/Login';
import { fetchMemories } from './services/memoryService';
import Navigation from './components/Navigation';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [memories, setMemories] = useState([]);
  const [filteredMemories, setFilteredMemories] = useState([]);

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

  const handleSearch = (query) => {
    setMemories((prevMemories) =>
      prevMemories.filter((memory) =>
        memory.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <Router>
      <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} handleSearch={handleSearch}/>
        <Routes>
          <Route path="/" element={<><MemoryPage memories={memories} setMemories={setMemories} /></>} />
          <Route path="/memory/:memoryId" element={<><Quote /><MemoryDetail memories={memories} /></>} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/registration" element={<Registration onLogin={handleLogin} />} />
        </Routes>
    </Router>
  );
}

export default App;
