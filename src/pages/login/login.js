import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost/sanai3ey/server/CustomerLogin.php', {
                email: email,
                password: password,
            });

            // Handle the response
            const token = response.data.data.Email;
            setIsLoggedIn(true);

            localStorage.setItem('token', token);

            // Reset the form
            setEmail('');
            setPassword('');

            // Redirect to the desired page
            window.location.href = '/profile'; // Replace '/profile/profile' with the desired URL of the page you want to redirect to
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
        return token ? token : '';
    };

    console.log(isLoggedIn);

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <p>Welcome, {getUsernameFromToken()}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
};

export default Login;
