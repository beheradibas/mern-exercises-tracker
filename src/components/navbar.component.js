import { Link } from 'react-router-dom';
import React, { Component } from 'react';


export default class Navbar extends Component {
    render() {
        return (
            <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Exercise Tracker</Link>
                <div className="navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Exercises</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link">Create Exercises Log</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user" className="nav-link">Create user</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </>
        );
    }
}

