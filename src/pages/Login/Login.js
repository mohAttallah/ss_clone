import React, { useState } from "react";
import axios from 'axios';
import './Login.css';
import Head from "./head";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost/sanai3ey/server/CustomerLogin.php', {
                email: email,
                password: password,
            });
            console.log(response.data.data.Email);

            // Handle the response
            const token = response.data.data.Email;
            setIsLoggedIn(true);

            localStorage.setItem('token', token);

            // Reset the form
            setEmail('');
            setPassword('');
        } catch (error) {
            // Handle error
            console.error(error);
        }
    };

    const handleLogout = () => {
        // Clear session data and set isLoggedIn to false
        setIsLoggedIn(false);
        localStorage.removeItem('token');
    };

    const getUsernameFromToken = () => {
        // Retrieve username from JWT token
        const token = localStorage.getItem('token');
        if (token) {
            // const decodedToken = jwt.decode(token);
            // return decodedToken ? decodedToken.username : '';
            return token;
        }
        return '';
    };

    return (
        <div>
            <Head />
            {isLoggedIn ? (
                <div>
                    <p>Welcome, {getUsernameFromToken()}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div className="container">
                    <div className="login-container">
                        <h1>Sanai3ey</h1>
                        <p>Log-in into Sanai3ey</p>
                        <form onSubmit={handleLogin}>
                            <input
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="forgot-password">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
