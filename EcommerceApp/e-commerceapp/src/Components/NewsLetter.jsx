import React from 'react'
import styled from 'styled-components'
import {Send} from '@material-ui/icons'
import { mobile } from '../responsive'
const Container = styled.div`
    height: 50vh;
    display: flex;
    flex-direction:column ;
    justify-content: center;
    text-align: center;
    background-color: #fae1dd;
    ${mobile({height: "30vh"})}
`
const Title = styled.h1`
    font-size: 60px;
    font-weight:400;
    ${mobile({fontSize: "40px"})}
`
const Description = styled.h3`
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
    ${mobile({fontSize: "15px"})}
`
const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    
`
const Input = styled.input`
    width: 40%;
    height: 35px;
    margin-right: 1px;
    padding: 5px;
    font-size: 15px;
    ${mobile({width: "75%", padding: "5px 10px" })}
`
const Button = styled.button`
    width: 5%;
    border: none;
    background-color: #e76f51;
    ${mobile({width: "10%"})}
`
function NewsLetter() {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products.</Description>
            <InputContainer>
                <Input placeholder="Your email..."/>
                <Button><Send /></Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter
