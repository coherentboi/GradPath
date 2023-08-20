//React Imports
import React, { useState } from 'react';

//React Redux Imports
import { useDispatch } from 'react-redux';

//Action Imports
import { submit_registration_form } from '../../../actions/registration';

//MUI Imports
import {Box, Button, Paper, styled, Typography} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

//Image Imports
import Panel1 from "../../../images/home_page4_panel_1.png"
import Panel2 from "../../../images/auth_tutoring.png"

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
    borderRadius: "0",
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

const XsInputField = styled('div')({
    width: "90%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px"
})

const XsStyledInput = styled('input')({
    fontSize: "10px",
    fontFamily: "Open Sans, sans-serif",
    border: "none",
    borderBottom: "2px solid black",
    borderRadius: "0",
    color: "black",
    outline: "none",
    padding: "6px 0",
    backgroundColor: "#FFFFFA",
    '&:focus': {
        borderBottom: "2px solid #1216D3"
    },
    '&::placeholder': {
        color: "#9698f6",
        opacity: 1
    }
})

const XsLabel = styled('label')({
    fontFamily: "Open Sans",
    fontSize: "10px",
    marginBottom: "3px",
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
            <Box sx={{display: {xs: "none", md: "flex"}, flexDirection: "column", width: "20%", height: "100%"}}>
                <img style={{height: "100%", width: "calc(100% - 20px)", marginRight: "20px", objectFit: "cover", borderRadius: "5px"}} src={Panel1} alt=""/>
            </Box>
            <Paper elevation={8} sx={{display: "flex", flexDirection: "column", width: {xs: "90%", md: "60%" }, height: "100%", alignItems: "center", justifyContent: "center"}}>
                <form style={{display: "flex", flexDirection: "column", width: "95%", height: "90%", alignItems: "center", justifyContent: "center", marginTop: "30px"}} onSubmit={handleSubmit}>
                    <Box sx={{display: {xs: "none", md: "flex"}, flexDirection: "column", width: "100%", height: "100%", alignItems: "center", justifyContent: "center"}}>
                        <Typography sx={{fontSize: "40px",fontFamily: 'Open Sans, sans-serif', fontWeight: "700", marginBottom: "20px"}}>
                            Questions?
                        </Typography>
                        <Typography align="center" sx={{fontSize: "16px",fontFamily: 'Open Sans, sans-serif', fontWeight: "400", marginBottom: "20px"}}>
                            If you are interested in our program but have some questions, please fill in this form. We'll contact you with details shortly.
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
                                            autoComplete="off"
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
                                            autoComplete="off"
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
                                        autoComplete="off"
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
                                        autoComplete="off"
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
                                            autoComplete="off"
                                        />
                                    </Box>
                                    <Box sx={{display: "flex", width: "calc(30% - 10px)", flexDirection: "column", marginBottom: "30px", marginLeft: "10px"}}><MdLabel htmlFor="grade">Grade:</MdLabel>
                                        <MdStyledInput
                                            type="text"
                                            name="grade"
                                            value={formInputs.grade || ""}
                                            onChange={handleChange}
                                            placeholder="E.g. 9"
                                            autoComplete="off"
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
                                        autoComplete="off"
                                    />
                                </MdInputField>
                                <MdInputField>
                                    <MdLabel htmlFor="comments">Question:</MdLabel>
                                    <MdStyledInput
                                        type="text"
                                        name="comments"
                                        value={formInputs.comments || ""}
                                        onChange={handleChange}
                                        placeholder="Please leave any questions or concerns here!"
                                        autoComplete="off"
                                    />
                                </MdInputField>
                            </HalfBox>
                        </Box>
                    </Box>
                    <Box sx={{display: {xs: "flex", md: "none"}, flexDirection: "column", width: "100%", height: "100%", alignItems: "center", justifyContent: "center"}}>
                        <Typography sx={{fontSize: "24px",fontFamily: 'Open Sans, sans-serif', fontWeight: "700", marginBottom: "5px"}}>
                            Interest Form
                        </Typography>
                        <Typography align="center" sx={{fontSize: "12px",fontFamily: 'Open Sans, sans-serif', fontWeight: "400", marginBottom: "20px", width: "90%"}}>
                            If you are interested in our program, please fill in this interest form. We'll contact you with details shortly.
                        </Typography>
                            <Box sx={{display: "flex", width: "90%", flexDirection: "row", justifyContent: 'center'}}>
                                <Box sx={{display: "flex", width: "calc(50% - 10px)", flexDirection: "column", marginBottom: "10px", marginRight: "10px"}}>
                                    <XsLabel htmlFor="first_name">First Name:</XsLabel>
                                    <XsStyledInput
                                        type="text"
                                        name="first_name"
                                        value={formInputs.first_name || ""}
                                        onChange={handleChange}
                                        placeholder="E.g. John"
                                        autoComplete="off"
                                    />
                                </Box>
                                <Box sx={{display: "flex", width: "calc(50% - 10px)", flexDirection: "column", marginBottom: "10px", marginLeft: "10px"}}>
                                    <XsLabel htmlFor="last_name">Last Name:</XsLabel>
                                    <XsStyledInput
                                        type="text"
                                        name="last_name"
                                        value={formInputs.last_name || ""}
                                        onChange={handleChange}
                                        placeholder="E.g. Doe"
                                        autoComplete="off"
                                    />
                                </Box>
                            </Box>
                            <XsInputField>
                                <XsLabel htmlFor="email">Email:</XsLabel>
                                <XsStyledInput
                                    type="text"
                                    name="email"
                                    value={formInputs.email || ""}
                                    onChange={handleChange}
                                    placeholder="E.g. johndoe@gradpathtutoring.com"
                                    autoComplete="off"
                                />
                            </XsInputField>
                            <XsInputField>
                                <XsLabel htmlFor="phone">Phone:</XsLabel>
                                <XsStyledInput
                                    type="text"
                                    name="phone"
                                    value={formInputs.phone || ""}
                                    onChange={handleChange}
                                    placeholder="E.g. 613-456-7890"
                                    autoComplete="off"
                                />
                            </XsInputField>
                            <Box sx={{display: "flex", width: "90%", flexDirection: "row", justifyContent: 'center'}}>
                                <Box sx={{display: "flex", width: "calc(80% - 10px)", flexDirection: "column", marginBottom: "10px", marginRight: "10px"}}>
                                    <XsLabel htmlFor="school">School:</XsLabel>
                                    <XsStyledInput
                                        type="text"
                                        name="school"
                                        value={formInputs.school || ""}
                                        onChange={handleChange}
                                        placeholder="E.g. Merivale High School"
                                        autoComplete="off"
                                    />
                                </Box>
                                <Box sx={{display: "flex", width: "calc(30% - 10px)", flexDirection: "column", marginBottom: "10px", marginLeft: "10px"}}>
                                    <XsLabel htmlFor="grade">Grade:</XsLabel>
                                    <XsStyledInput
                                        type="text"
                                        name="grade"
                                        value={formInputs.grade || ""}
                                        onChange={handleChange}
                                        placeholder="E.g. 9"
                                        autoComplete="off"
                                    />
                                </Box>
                            </Box>
                            <XsInputField>
                                <XsLabel htmlFor="subject">Subject (Please List All You Wish To Take):</XsLabel>
                                <XsStyledInput
                                    type="text"
                                    name="subject"
                                    value={formInputs.subject || ""}
                                    onChange={handleChange}
                                    placeholder="E.g. Mathematics, English, Science"
                                    autoComplete="off"
                                />
                            </XsInputField>
                            <XsInputField>
                                <XsLabel htmlFor="comments">Comments:</XsLabel>
                                <XsStyledInput
                                    type="text"
                                    name="comments"
                                    value={formInputs.comments || ""}
                                    onChange={handleChange}
                                    placeholder="Please leave any questions or concerns here!"
                                    autoComplete="off"
                                />
                            </XsInputField>
                    </Box>
                </form>
                <Box sx={{height: "10%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button color="primary" sx={{height: "100%", width: "100%", color: "white", backgroundColor: "primary.main", borderRadius: "0 0 3px 3px", transition: "0.3s", ":hover":{backgroundColor: "primary.main", filter: "brightness(75%)"}}} type="submit" value="Submit">Submit</Button>
                </Box>
            </Paper>
            <Box sx={{display: {xs: "none", md: "flex"}, flexDirection: "column", width: "20%", height: "100%"}}>
                <img style={{height: "100%", width: "calc(100% - 20px)", marginLeft: "20px", objectFit: "cover", borderRadius: "5px"}} src={Panel2} alt=""/>
            </Box>
        </Box>
    )
}

export default Registration;
