
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserAccount = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                console.log('Fetching user data...');
                const result = await axios.get('http://localhost:3001/user/user_01'); 
                console.log('User data:', result.data);
                setUser(result.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUser();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Updating user data...');
            const response = await axios.put('http://localhost:3001/user/user_01', user); // Replace USER_ID with actual user ID
            console.log('User data updated:', response.data);
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    return (
        <div className="container">
            <h2>User Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default UserAccount;
