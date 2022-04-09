
import React from 'react'
import styled from 'styled-components'
import {ShoppingCart, Search, FavoriteBorder} from '@material-ui/icons'
import { Link } from 'react-router-dom'
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    display: flex;
    z-index: 3;
    background-color:rgb(0, 0, 0, 0.2);
    align-items: center;
    justify-content: center;
    transition: opacity 0.25s ease-in;
    cursor: pointer;
`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 350px;
    min-width: 280px;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
    
`
const Img = styled.img`
    height: 75%;
    width: 100%;
    overflow: hidden;
    object-fit: cover;
    z-index: 2;
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50% ;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3px;
    transition: transform 0.25s ease-in;
    &:hover{
        background-color: pink;
        transform: scale(1.1);
    }
`
//<Img src={product.img}/>
function Product({product}) {
    return (
        <Container>
            <Circle/>
            <Img src={product.img}/>
            <Info>
                <Link to={`/cart`}>
                    <Icon><ShoppingCart style={{color: "black"}}/></Icon>
                </Link> 
                <Link to={`/product/${product._id}`}>
                    <Icon><Search style={{color: "black"}}/></Icon>
                </Link>
                    <Icon><FavoriteBorder/></Icon>
            </Info>
        </Container>
    )
}

export default Product
