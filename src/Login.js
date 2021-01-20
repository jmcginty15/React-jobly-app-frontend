import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import JoblyApi from './JoblyAPI';
import './Login.css';

const Login = ({ setToken }) => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    function handleChange(evt) {
        const field = evt.target.name;
        const value = evt.target.value;
        const newFormData = { ...formData };
        newFormData[field] = value;
        setFormData(newFormData);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        JoblyApi.login(formData).then(() => {
            setToken('token', JoblyApi.token);
            history.push('/');
        });
    }

    return (
        <div className="Login">
            <h2 className="Login-header">Log In</h2>
            <form onSubmit={handleSubmit}>
                <div className="Login-field">
                    <label htmlFor="username">Username:</label>
                    <input className="Login-input" type="text" id="username" name="username" value={formData.username} placeholder="Username" onChange={handleChange} required />
                </div>
                <div className="Login-field">
                    <label htmlFor="password">Password:</label>
                    <input className="Login-input" type="password" id="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} required />
                </div>
                <button className="Login-button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;