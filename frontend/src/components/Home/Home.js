import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {submit_registration_form} from "../../actions/registration";

const Home = () => {

    const [formInputs, setFormInputs] = useState({first_name: "", last_name: "", phone: "", email: "", school: "", grade: "", subject: "", comments: ""})

    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        setFormInputs({...formInputs, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submit_registration_form(formInputs));
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="first_name">First Name:</label>
            <input
                type="text"
                name="first_name"
                value={formInputs.first_name || ""}
                onChange={handleChange}
            />
            <label htmlFor="last_name">Last Name:</label>
            <input
                type="text"
                name="last_name"
                value={formInputs.last_name || ""}
                onChange={handleChange}
            />
            <label htmlFor="phone">Phone:</label>
            <input
                type="text"
                name="phone"
                value={formInputs.phone || ""}
                onChange={handleChange}
            />
            <label htmlFor="email">Email:</label>
            <input
                type="text"
                name="email"
                value={formInputs.email || ""}
                onChange={handleChange}
            />
            <label htmlFor="school">School:</label>
            <input
                type="text"
                name="school"
                value={formInputs.school || ""}
                onChange={handleChange}
            />
            <label htmlFor="grade">Grade:</label>
            <input
                type="text"
                name="grade"
                value={formInputs.grade || ""}
                onChange={handleChange}
            />
            <label htmlFor="subject">Subject:</label>
            <input
                type="text"
                name="subject"
                value={formInputs.subject || ""}
                onChange={handleChange}
            />
            <label htmlFor="comments">Comments:</label>
            <input
                type="text"
                name="comments"
                value={formInputs.comments || ""}
                onChange={handleChange}
            />
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Home;