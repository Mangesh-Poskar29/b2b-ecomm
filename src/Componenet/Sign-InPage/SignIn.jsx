import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

import './SignIn.css'; 
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign in logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="signin-container">
            <div className="signin-form">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email"><FaUser className='icon' size={15} />Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><FaLock className='icon' size={15} />Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="signin-button">Sign In</button>
                </form>
                <div className="signup-link">
                    <p>Don't have an account? <a href="/SignUp">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
