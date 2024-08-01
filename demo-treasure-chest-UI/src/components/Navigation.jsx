import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ isLoggedIn, handleLogout }) => {
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
            </div>
        </nav>
    );
};

export default Navigation;
