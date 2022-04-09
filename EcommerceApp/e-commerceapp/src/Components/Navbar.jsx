import React from 'react';
import styled from 'styled-components';
import {Search, ShoppingCart} from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import { mobile} from '../responsive';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom' 
// this is new way to style some common classname
const Container = styled.div`
    height: 60px;
    ${mobile({height: "45px"})}
 
`
//   ${tablet({height: "50px"})}
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px", justifyContent: "center"})}
`
//    ${tablet({padding: "12px", justifyContent: "center"})}
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`
// ${tablet({fontSize: "12px"})}

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px 7px;
    // No choice, so we have to use margin here
    margin-left: 25px;
    ${mobile({width: "80px", marginLeft: "5px"})}
`
// ${tablet({width: "120px", marginLeft: "10px"})}
const Input = styled.input`
    border: none;
    ${mobile({width: "60px"})}
`
// ${tablet({width: "100px"})}
const Center = styled.div`
    flex:1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: 700;
    ${mobile({fontSize: "20px"})}
`
// ${tablet({fontSize: "28px"})}
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: "center", flex:"2"})}
`
// ${tablet({justifyContent: "flex-end", flex:"1"})}
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin: 0 15px;
    color: black;
    ${mobile({margin:"0 7px", fontSize: "13px"})}
`
// ${tablet({margin:"0 10px"})}
export default function Navbar() {
    const quantity = useSelector(state => state.cart.quantity)
    console.log(typeof quantity, quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN | VN</Language>
                    <SearchContainer>
                        <Input placeholder="Search..."/> 
                        <Search style={{"color":"gray", "fontSize":"16px"}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>TRAM.</Logo>
                </Center>
                <Right>
                    <Link to={`/register`} style={{textDecoration: "none"}}>
                        <MenuItem>Register</MenuItem>
                    </Link>
                    <Link to={`/login`} style={{textDecoration: "none"}}>
                        <MenuItem>Sign In</MenuItem>
                    </Link>
                    
                    <Link to={`/cart`}> 
                    <MenuItem>
                        <Badge badgeContent={quantity} color="secondary">
                            
                                <ShoppingCart style={{color: "black"}}/>
                         
                        </Badge>
                    </MenuItem>
                    </Link> 
                </Right>
            </Wrapper>
        </Container>
    )
}
