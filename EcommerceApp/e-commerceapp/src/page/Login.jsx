import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import NewsLetter from '../Components/NewsLetter'
import { mobile } from '../responsive'
const Container = styled.div`

`
const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.2), 
        rgba(255,255,255,0.2)
    ),
    url("https://images.unsplash.com/photo-1637966495998-23d7fb7e03be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")
    center;
    ${mobile({height: "50vh",backgroundSize: "cover"})}
`
const Wapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center;
    width: 30vw;
    height: 50vh;
    ${mobile({width: "80vw"})}
`
const Title = styled.h1`
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 20px;
    ${mobile({fontSize: "25px",})}

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    width: 80%;
    margin: 10px 10px;
    padding: 7px 10px;
    border: none;
    font-size: 15px;
    cursor: pointer;
    ${mobile({fontSize: "13px",})}
   
`
const Button = styled.button`
    margin: 10px 0;
    width: 100px;
    height: 40px;
    padding: 7px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5cac3;
    border: none;
    color: black;
    transition: all 0.25s ease-in;
    cursor: pointer;
    &:hover{
        background-color: #f28482;
        color: white;
    }
    ${mobile({width: "70px", fontSize: "10px", height: "30px"})}
`
const Link = styled.a`
    font-size: 15px;
    color: white;
    text-decoration: underline;
    margin: 3px 0;
    cursor: pointer;
    ${mobile({fontSize: "13px",})}
`
function Login() {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <LoginContainer>
                <Wapper>
                    <Title>LOGIN ACCOUNT</Title>
                    <Form>
                        <Input placeholder="Username..."/>
                        <Input placeholder="Password..."/>
                        <Button>ACCESS</Button>
                        <Link><i>Forgot your username or password</i></Link>
                        <Link>Create a new account</Link>
                    </Form>
                </Wapper>
            </LoginContainer>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default Login
