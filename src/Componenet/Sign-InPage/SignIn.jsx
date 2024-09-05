import React, { useState } from 'react';
import { FaUser, FaLock, FaUserTie, FaUserTag } from 'react-icons/fa';

import './SignIn.css'; 
import { Link } from 'react-router-dom';
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('buyer');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="signin-container">
            <div className="signin-form">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                    <label htmlFor="role">
                            {role === 'seller' ? <FaUserTie className="icon" size={15} /> : <FaUserTag className="icon" size={15} />}
                            Sign in as
                        </label>
                        <select
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="role-select"
                        >
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>
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
                    <Link to='/login/seller'><button type="submit" className="signin-button">Sign In</button></Link>
                </form>
                <div className="signup-link">
                    <p>Don't have an account? <a href="/SignUp">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
