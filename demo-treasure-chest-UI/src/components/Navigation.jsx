import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = ({ isLoggedIn, handleLogout, handleSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const onSearchSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchQuery);
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                </ul>
                <form className="d-flex" onSubmit={onSearchSubmit}>
                    <input
                        type="text"
                        className="form-control me-2"
                        placeholder="Search memories..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default Navigation;
