//React Imports
import React, { useState } from 'react';

//React Redux Imports
import { useDispatch } from 'react-redux';

//Action Imports
import { submit_registration_form } from '../../../actions/registration';

//MUI Imports
import {Box, Button, Paper, styled, Typography} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

const MdInputField = styled('div')({
    width: "90%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px"
})

const MdStyledInput = styled('input')({
    fontSize: "15px",
    fontFamily: "Open Sans, sans-serif",
    border: "none",
    borderBottom: "2px solid black",
    color: "black",
    outline: "none",
    padding: "10px 0",
    backgroundColor: "#FFFFFA",
    '&:focus': {
        borderBottom: "2px solid #1216D3"
    },
    '&::placeholder': {
        color: "#9698f6",
        opacity: 1
    }
})

const MdLabel = styled('label')({
    fontFamily: "Open Sans",
    fontSize: "14px",
    marginBottom: "5px",
    color: "black",
    fontWeight: "500"
})

const HalfBox = styled(Box)({
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
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
        <Box sx={{display: "flex", flexDirection: "row", width: "95%", height: "90%", alignItems: "center", justifyContent: "center", borderRadius: "10px"}}>
            <Box sx={{display: "flex", flexDirection: "column", width: "20%", height: "100%"}}>

            </Box>
            <Paper elevation={8} sx={{display: "flex", flexDirection: "column", width: "60%", height: "100%", alignItems: "center", justifyContent: "center"}}>
                <form style={{display: "flex", flexDirection: "column", width: "95%", height: "90%", alignItems: "center", justifyContent: "center", marginTop: "30px"}} onSubmit={handleSubmit}>
                    <Typography sx={{fontSize: "40px",fontFamily: 'Open Sans, sans-serif', fontWeight: "700", marginBottom: "20px"}}>
                        Interest Form
                    </Typography>
                    <Typography align="center" sx={{fontSize: "16px",fontFamily: 'Open Sans, sans-serif', fontWeight: "400", marginBottom: "20px"}}>
                        If you are interested in our program, please fill in this interest form. We'll contact you with details shortly.
                    </Typography>
                    <Box sx={{display: "flex", flexDirection: "row", width: "100%", height: "70%", marginBottom: "10px", alignItems: "center", justifyContent: "center"}}>
                        <HalfBox>
                            <Box sx={{display: "flex", width: "90%", flexDirection: "row", justifyContent: 'center'}}>
                                <Box sx={{display: "flex", width: "calc(50% - 10px)", flexDirection: "column", marginBottom: "30px", marginRight: "10px"}}>
                                    <MdLabel htmlFor="first_name">First Name:</MdLabel>
                                    <MdStyledInput
                                        type="text"
                                        name="first_name"
                                        value={formInputs.first_name || ""}
                                        onChange={handleChange}
                                        placeholder="E.g. John"
                                    />
                                </Box>
                                <Box sx={{display: "flex", width: "calc(50% - 10px)", flexDirection: "column", marginBottom: "30px", marginLeft: "10px"}}>
                                    <MdLabel htmlFor="last_name">Last Name:</MdLabel>
                                    <MdStyledInput
                                        type="text"
                                        name="last_name"
                                        value={formInputs.last_name || ""}
                                        onChange={handleChange}
                                        placeholder="E.g. Doe"
                                    />
                                </Box>
                            </Box>
                            <MdInputField>
                                <MdLabel htmlFor="email">Email:</MdLabel>
                                <MdStyledInput
                                    type="text"
                                    name="email"
                                    value={formInputs.email || ""}
                                    onChange={handleChange}
                                    placeholder="E.g. johndoe@gradpathtutoring.com"
                                />
                            </MdInputField>
                            <MdInputField>
                                <MdLabel htmlFor="phone">Phone:</MdLabel>
                                <MdStyledInput
                                    type="text"
                                    name="phone"
                                    value={formInputs.phone || ""}
                                    onChange={handleChange}
                                    placeholder="E.g. 613-456-7890"
                                />
                            </MdInputField>
                        </HalfBox>
                        <HalfBox>
                            <Box sx={{display: "flex", width: "90%", flexDirection: "row", justifyContent: 'center'}}>
                                <Box sx={{display: "flex", width: "calc(80% - 10px)", flexDirection: "column", marginBottom: "30px", marginRight: "10px"}}>
                                    <MdLabel htmlFor="school">School:</MdLabel>
                                    <MdStyledInput
                                        type="text"
                                        name="school"
                                        value={formInputs.school || ""}
                                        onChange={handleChange}
                                        placeholder="E.g. Merivale High School"
                                    />
                                </Box>
                                <Box sx={{display: "flex", width: "calc(30% - 10px)", flexDirection: "column", marginBottom: "30px", marginLeft: "10px"}}><MdLabel htmlFor="grade">Grade:</MdLabel>
                                    <MdStyledInput
                                        type="text"
                                        name="grade"
                                        value={formInputs.grade || ""}
                                        onChange={handleChange}
                                        placeholder="E.g. 9"
                                    />
                                </Box>
                            </Box>
                            <MdInputField>
                                <MdLabel htmlFor="subject">Subject (Please List All You Wish To Take):</MdLabel>
                                <MdStyledInput
                                    type="text"
                                    name="subject"
                                    value={formInputs.subject || ""}
                                    onChange={handleChange}
                                    placeholder="E.g. Mathematics, English, Science"
                                />
                            </MdInputField>
                            <MdInputField>
                                <MdLabel htmlFor="comments">Comments:</MdLabel>
                                <MdStyledInput
                                    type="text"
                                    name="comments"
                                    value={formInputs.comments || ""}
                                    onChange={handleChange}
                                    placeholder="Please leave any questions or concerns here!"
                                />
                            </MdInputField>
                        </HalfBox>
                    </Box>
                </form>
                <Box sx={{height: "10%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button color="primary" sx={{height: "100%", width: "100%", color: "white", backgroundColor: "primary.main", borderRadius: "0 0 3px 3px", transition: "0.3s",":hover":{color: "black"}}} type="submit" value="Submit">Submit</Button>
                </Box>
            </Paper>
            <Box sx={{display: "flex", flexDirection: "column", width: "20%", height: "100%"}}>

            </Box>
        </Box>
    )
}

export default Registration;
