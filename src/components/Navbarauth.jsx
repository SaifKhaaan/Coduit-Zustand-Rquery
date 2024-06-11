import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbarauth({ isLoggedIn, user }) {
    const location = useLocation();

    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/">conduit</a>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                    </li>
                    {isLoggedIn ? (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/editor">
                                    <i className="ion-compose"></i>&nbsp;New Article
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/settings">
                                    <i className="ion-gear-a"></i>&nbsp;Settings
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown">
                                    <img src={user.profile_picture_url} alt="user-pic" className="user-pic" />
                                    {user.username}
                                </Link>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to={`/profile/${user.username}`}>Profile</Link>
                                    <Link className="dropdown-item" to="/logout">Logout</Link>
                                </div>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Sign in  </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Sign up</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbarauth;
