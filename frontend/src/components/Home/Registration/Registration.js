//React Imports
import React, { useState } from 'react';

//React Redux Imports
import { useDispatch } from 'react-redux';

//Action Imports
import { submit_registration_form } from '../../../actions/registration';

//MUI Imports
import {Box, styled} from "@mui/material";

const MdStyledInput = styled('input')({

})

const Registration = () => {

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
        <Box sx={{width: "100%", height: "100%"}}>
            <Box sx={{display: {xs: "none", md: "flex"}}}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="first_name">First Name:</label>
                    <MdStyledInput
                        type="text"
                        name="first_name"
                        value={formInputs.first_name || ""}
                        onChange={handleChange}
                    />
                    <label htmlFor="last_name">Last Name:</label>
                    <MdStyledInput
                        type="text"
                        name="last_name"
                        value={formInputs.last_name || ""}
                        onChange={handleChange}
                    />
                    <label htmlFor="phone">Phone:</label>
                    <MdStyledInput
                        type="text"
                        name="phone"
                        value={formInputs.phone || ""}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email:</label>
                    <MdStyledInput
                        type="text"
                        name="email"
                        value={formInputs.email || ""}
                        onChange={handleChange}
                    />
                    <label htmlFor="school">School:</label>
                    <MdStyledInput
                        type="text"
                        name="school"
                        value={formInputs.school || ""}
                        onChange={handleChange}
                    />
                    <label htmlFor="grade">Grade:</label>
                    <MdStyledInput
                        type="text"
                        name="grade"
                        value={formInputs.grade || ""}
                        onChange={handleChange}
                    />
                    <label htmlFor="subject">Subject:</label>
                    <MdStyledInput
                        type="text"
                        name="subject"
                        value={formInputs.subject || ""}
                        onChange={handleChange}
                    />
                    <label htmlFor="comments">Comments:</label>
                    <MdStyledInput
                        type="text"
                        name="comments"
                        value={formInputs.comments || ""}
                        onChange={handleChange}
                    />
                    <input type="submit" value="Submit"/>
                </form>
            </Box>

        </Box>
    )
}

export default Registration;