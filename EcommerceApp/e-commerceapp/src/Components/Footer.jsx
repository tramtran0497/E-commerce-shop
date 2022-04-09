import React from 'react'
import styled from 'styled-components'
import {Facebook, Instagram, LinkedIn, Twitter, Pinterest, PhoneInTalk, AddLocation, Email } from '@material-ui/icons'
import { mobile } from '../responsive'
const Container = styled.div`
    display: flex;
    padding: 20px;
    ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${mobile({marginBottom: "20px"})}
`
const Logo = styled.h1`
    font-size: 30px;
`
const Description = styled.p`
    font-size: 15px;
    text-align: justify;
    margin: 10px 0;
`
const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    ${mobile({justifyContent: "center"})}
`
const SocialIcon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: white;
    background-color:#${props => props.bg} ;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
`
const Center = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({display: "none"})}
`
const Title = styled.h3`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 20px;
    ${mobile({fontSize: "30px"})}
`
const List = styled.ul`
     display: flex;
     flex-wrap: wrap;
     padding: 0;
`
const ListItem = styled.li`
    width: 50%;
    list-style: none;
    text-decoration: underline;
    padding: 5px 0;
    
`
const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    ${mobile({backgroundColor: "#eae4e9", padding: "5px 10px "})}
`
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 5px;
`
const Wrapper = styled.div`
    height: 40%;
    width: 80%;
    overflow: hidden;
    display: flex;
    
`
const Payment = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`
export default function Footer() {
    return (
        <Container>
            <Left>
                <Logo>TRAM.</Logo>
                <Description>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori sunt in culpa qui officia deserunt mollit anim id est laborum."</Description>
                <SocialContainer>
                    <SocialIcon bg="0c63e7">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon  bg="b5179e">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon bg="003554">
                        <LinkedIn/>
                    </SocialIcon>
                    <SocialIcon bg="5aa9e6">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon bg="ff002b">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Clothing</ListItem>
                    <ListItem>Woman Clothing</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Customer Service</Title>
                <ContactItem><AddLocation style={{"marginRight": "10px"}}/>Mariankatu 6B, 15110 Lahti</ContactItem>
                <ContactItem><PhoneInTalk style={{"marginRight": "10px"}}/>+358 234 567 789</ContactItem>
                <ContactItem><Email style={{"marginRight": "10px"}}/>Tram@gmail.com</ContactItem>
                <Wrapper>
                    <Payment src="https://cidincmastering.com/blog/wp-content/uploads/2020/04/payment-options-ice-dam-guys-top-rated-ice-dam-removal-for-paypal-credit-card-png.png"/>
                </Wrapper>
            </Right>
        </Container>
    )
}
