import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'
const Container = styled.div`
   
   width: 100%;
   height: 100%;
   position: relative;
   margin: 0 5px;
   ${mobile({margin: "30px 0", height: "10vh", width: "180px"})}
`
const ImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    ${mobile({padding: "0", height: "200px"})}

`
const Img = styled.img`
   /* display: none; */
   height: 100%;
   width: 100%;
   object-fit: cover;
   ${mobile({height: "100%", width: "100%"})}
`
const Info = styled.div`
    width: 80%;
    height: 100px;
    position: absolute;
    top: 60%;
    left: calc(50% - 100px);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    opacity: 0.45;
    border: 1px solid black;
    transition: opacity 0.25s ease-in;
    cursor: pointer;
    &:hover{
        opacity: 1;
    }
    ${mobile({left: "15px", height: "50px", padding: "10px 5px", top: "70%"})}
`
const Title = styled.h2`
    margin-bottom: 10px;
    font-size: 20px;
    color: white;
    ${mobile({fontSize: " 15px"})}

`
const Button = styled.button`
    width: 130px;
    height: 40px;
    padding: 5px;
    border: none;
    color:#555 ;
    background-color:white;
    font-weight: 700;
    border: 1px solid black;
    cursor: pointer;
    ${mobile({height: "30px", width: "100px", fontSize: "10px" })}

`
function CategoryItem({category}) {
    return (
        <Container>
                <ImgWrapper>
                    <Img src={category.img}/>
                </ImgWrapper>
                <Info>
                    <Title>{category.title}</Title>
                    <Link to={`/products/${category.cat}`}>
                        <Button>SHOPPING NOW</Button>
                    </Link>
                </Info>
            
        </Container>
    )
}
export default CategoryItem