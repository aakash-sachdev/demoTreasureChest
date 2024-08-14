// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navigation = ({ isLoggedIn, handleLogout, handleSearch }) => {
//     const [searchQuery, setSearchQuery] = useState("");
//     const navigate = useNavigate();

//     const onSearchSubmit = (e) => {
//         e.preventDefault();
//         handleSearch(searchQuery);
//         navigate("/");
//     };

//     return (
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//             <a className="navbar-brand" href="/">Treasured Chest</a>
//             <div className="collapse navbar-collapse">
//                 <ul className="navbar-nav">
//                     <li className="nav-item">
//                         <Link className="nav-link active" to="/">Home</Link>
//                     </li>
//                     {isLoggedIn ? (
//                         <li className="nav-item">
//                             <button onClick={handleLogout} className="btn btn-logout">
//                                 Logout
//                             </button>
//                         </li>
//                     ) : (
//                         <>
//                             <li className="nav-item">
//                                 <Link className="nav-link active" to="/login">Login</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link active" to="/registration">Registration</Link>
//                             </li>
//                         </>
//                     )}
//                 </ul>
//                 <form className="d-flex" onSubmit={onSearchSubmit}>
//                     <input
//                         type="text"
//                         className="form-control me-2"
//                         placeholder="Search memories..."
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
//                         Search
//                     </button>
//                 </form>
//             </div>
//         </nav>
//     );
// };

// export default Navigation;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = ({ isLoggedIn, handleLogout, handleSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    const onSearchSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchQuery);
        navigate("/");
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.body.classList.remove('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
        }
    };

    return (
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'bg-dark navbar-dark' : 'bg-body-tertiary navbar-light'}`}>
            <a className="navbar-brand" href="/">Treasured Chest</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    {isLoggedIn ? (
                        <li className="nav-item">
                            <button onClick={handleLogout} className="btn btn-logout">
                                Logout
                            </button>
                        </li>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/registration">Registration</Link>
                            </li>
                        </>
                    )}
                    <li className="nav-item">
                        <button onClick={toggleDarkMode} className="btn btn-toggle-mode">
                            {darkMode ? "Light Mode" : "Dark Mode"}
                        </button>
                    </li>
                </ul>
                <form className="d-flex" onSubmit={onSearchSubmit}>
                    <input
                        type="text"
                        className={`form-control me-2 ${darkMode ? 'bg-dark text-white' : ''}`}
                        placeholder="Search memories..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-success'} my-2 my-sm-0`} type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default Navigation;
