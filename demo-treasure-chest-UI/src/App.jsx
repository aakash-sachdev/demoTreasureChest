import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MemoryPostForm from './components/MemoryPostForm';
import DisplayMemory from './components/DisplayMemory';
import './App.css';

function App() {
    const [memoryPost, setMemoryPost] = useState(null);

    return (
        <Router>
            <div className="App">
                <h1 className="mb-3">Create Memory Form</h1>
                <Routes>
                    <Route path="/display" element={<DisplayMemory memoryPost={memoryPost} />} />
                    <Route path="/" element={<MemoryPostForm setMemoryPost={setMemoryPost} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
