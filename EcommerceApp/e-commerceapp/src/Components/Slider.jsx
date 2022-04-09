import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react';
import styled from "styled-components"
import {slideData} from '../data'
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    ${mobile({height: "20vh"})}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f8f9fb;
    color: #555;
    border-radius: 50%;
    display: flex;
    align-items: center;
    position: absolute;
    top: calc(50% - 25px);
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    ${mobile({width: "30px", height: "30px", justifyContent: "center"})}
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: all 1.5s ease-in-out;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg}; 
    ${mobile({height: "40vh"})}
`
const ImgContainer = styled.div`
    height: 100%;
    flex:2;
    display: flex;
    align-items: center;
    ${mobile({display: "none", flex: "0"})}
`
const Img = styled.img`
    height: 80%;
    width: 100%;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
    ${mobile({padding: " 0 45px", height: "30vh"})}
`
const Title = styled.h1`
    font-size: 40px;
    color: #bf0603;
    ${mobile({fontSize: "15px"})}
`
const Description = styled.p`
    margin: 10px 0;
    color: white;
    display: flex;
    align-items: center;
    ${mobile({fontSize: "10px"})}
`
const Button = styled.button`
    border-radius: 10px;
    padding: 10px;
    border:none;
    color: white;
    background-color: #780000;
    cursor: pointer;
    ${mobile({fontSize: "10px", padding: "8px"})}
`
function Slider() {
    const [index, setIndex] = useState(0)
    const handleClick = (direction)=>{
        if(direction === 'left'){
            setIndex(index > 0? index -1 : 4 )
        }
        if(direction === "right"){
            setIndex(index < 4? index + 1: 0)
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=> handleClick("left")} >
                <ArrowLeftOutlined style={{"fontSize": "50px"}}/>
            </Arrow>
            <Wrapper slideIndex = {index}>
                {slideData.map(slide => 
                    (
                        <Slide bg={slide.bg} key={slide.id}>
                            <ImgContainer>
                                <Img src={slide.img}/>
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{slide.title} </Title>
                                <Description>{slide.description}</Description>
                                <Button>{slide.btn}</Button>
                            </InfoContainer>
                        </Slide>
                    ))}
            </Wrapper>
            <Arrow  direction="right">
                <ArrowRightOutlined style={{"fontSize": "50px"}} onClick={()=> handleClick("right")} />
            </Arrow>
        </Container>
    )
}

export default Slider
