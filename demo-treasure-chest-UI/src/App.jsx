import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MemoryPage } from './components/MemoryPage';
import { MemoryDetail } from './components/MemoryDetail';
import Quote from './components/Quote';
import UserList from './components/UserList'; // Import the UserList component
import ChildList from './components/ChildList'; // Import the ChildList component
import { fetchMemories } from './services/memoryService';
import { fetchUsers } from './services/userService';
import { fetchChildren } from './services/childService';
import Navigation from './components/Navigation';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [memories, setMemories] = useState([]);
  const [users, setUsers] = useState([]);
  const [children, setChildren] = useState([]);
  const [filteredMemories, setFilteredMemories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [memoriesData, usersData, childrenData] = await Promise.all([
          fetchMemories(),
          fetchUsers(),
          fetchChildren()
        ]);
        setMemories(memoriesData);
        setUsers(usersData);
        setChildren(childrenData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
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
      <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<MemoryPage memories={memories} setMemories={setMemories} />} />

        <Route path="/users" element={<UserList users={users} />} />
        <Route path="/user/:userId/children" element={<ChildList children={children} />} />
        <Route path="/memory/:memoryId" element={<><Quote /><MemoryDetail memories={memories} users={users} children={children} /></>} />
        {/* <Route path="/login" element={<Login onLogin={handleLogin} />} />  */}
        {/* { <Route path="/registration" element={<Registration onLogin={handleLogin} />} /> */}
      </Routes>
      {/* <Routes>
        {/* User List Route */}
        {/* <Route path="/" element={<UserList users={users} />} />
        {/* Child List Route */}
        {/* <Route path="/user/:userId/children" element={<ChildList children={children} />} /> */}
        {/* Memory List Route */}
        {/* <Route path="/user/:userId/child/:childId/memories" element={<MemoryList memories={memories} />} /> */}
      {/* </Routes> */}
    </Router>
  );
}

export default App;
