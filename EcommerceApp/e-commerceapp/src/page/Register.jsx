import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import NewsLetter from '../Components/NewsLetter'
import { mobile } from '../responsive'
const Container = styled.div`

`
const CreateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.2), 
        rgba(255,255,255,0.2)
    ),
    url("https://images.unsplash.com/photo-1549488497-94b52bddac5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")
    center;
    ${mobile({height: "70vh", backgroundSize: "cover"})}
`
const Wapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center;
    width: 60vw;
    height: 50vh;
    ${mobile({height: "50vh", width: "100vw"})}
`
const Title = styled.h1`
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 20px;
    ${mobile({fontSize: "25px",})}
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
`
const Input = styled.input`
    width: 40%;
    margin: 10px 10px;
    padding: 7px 10px;
    border: none;
    font-size: 15px;
    cursor: pointer;
    ${mobile({width: "70%", fontSize: "13px"})}
`
const Agreement = styled.span`
    margin: 15px;
    text-align: center;
    font-size: 18px;
    ${mobile({fontSize: "15px",})}
`
const Button = styled.button`
    width: 100px;
    height: 40px;
    padding: 7px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c9184a;
    border: none;
    color: white;
    transition: all 0.25s ease-in;
    cursor: pointer;
    &:hover{
        background-color: #f28482;
    }
    ${mobile({fontSize: "13px", height: "30px", width: "80px"})}
`
function Register() {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <CreateContainer>
                <Wapper>
                    <Title>CREATE A NEW ACCOUNT</Title>
                    <Form>
                        <Input placeholder="Name..."/>
                        <Input placeholder="Last Name..."/>
                        <Input placeholder="Username..."/>
                        <Input placeholder="Password..."/>
                        <Input placeholder="Email..."/>
                        <Input placeholder="Confirmed Password..."/>
                        <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b style={{"textDecoration":"underline", "cursor":"pointer"}}>PRIVACY POLICY</b></Agreement>
                        <Button>CREATE</Button>
                    </Form>
                </Wapper>
            </CreateContainer>
            <NewsLetter/>
            <Footer/>
        </Container>
        
    )
}

export default Register
