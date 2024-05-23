import React, { useState } from 'react';
import "./SignInUp.css";
import axios from "axios"

axios.defaults.baseURL = "http://localhost:8000/"
const Signup = () => {
    const [cnfmPassword, setCnfmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: ""
    });

    const handleSignUp = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Handle form submission logic here
            try {
                const data = await axios.post("/create",formData)
                console.log(data);
            } catch (error) {
                console.error("Error during form submission", error);
            }
        } else {
            console.log("There is an error, please check");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const validate = () => {
        const validationErrors = {};

        if (!formData.password) {
            validationErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters long';
        }

        if (!cnfmPassword) {
            validationErrors.cnfmPassword = 'Confirm password is required';
        } else if (formData.password !== cnfmPassword) {
            validationErrors.cnfmPassword = 'Passwords do not match';
        }

        return validationErrors;
    };

    const checkMobile = (e) => {
        const value = e.target.value;
        const mobileErrors = {};
        
        if (/^[0-9]*$/.test(value) && value.length <= 10) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                mobile: value
            }));
        } else {
            mobileErrors.mobile = 'Mobile number must be 10 digits';
        }

        setErrors(mobileErrors);
    };

    return (
        <div className='login-form'>
            <form onSubmit={handleSignUp}>
                <h2>Sign Up</h2>
                <div className='form-group'>
                    <label htmlFor='name'>Full Name</label>
                    <input type='text' id="name" name="name" onChange={handleChange} required />
                </div>
                <div className='form-group'>
                    <label htmlFor='mobile'>Mobile</label>
                    <input type='tel' id="mobile" name="mobile" value={formData.mobile} onChange={checkMobile} pattern="[0-9]{10}" maxLength="10" required />
                    {errors.mobile && <p className="error">{errors.mobile}</p>}
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id="email" name="email" onChange={handleChange} required />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id="password" name="password" onChange={handleChange} required />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div className='form-group'>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input type='password' id="cnfmPassword" value={cnfmPassword} onChange={(e) => setCnfmPassword(e.target.value)} required />
                    {errors.cnfmPassword && <p className="error">{errors.cnfmPassword}</p>}
                </div>
                <button type='submit' className='login-button'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Signup;
