import { Add, Remove } from '@material-ui/icons'
import React, {useState} from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import NewsLetter from '../Components/NewsLetter'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Container = styled.div`
    ${mobile({width: "100vw"})}
`
const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 100vw;
    height: 100vh; */
    
`
const Title = styled.h1`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    ${mobile({fontSize: "23px", marginTop: "10px"})}
`
const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    ${mobile({marginBottom: "15px", marginTop: "15px"})}
`
const TopButton = styled.button`
    margin: 0 20px;
    background-color: ${props => props.type === 'filled' ? "black" : "white"};
    color: ${props => props.type === 'filled' && "white"};
    border: 1px solid black;
    padding: 10px;
    width: 160px;
    ${mobile({width: "100px", margin: "0 10px", fontSize: "10px", padding: "5px"})}
`
const TopTexts = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const TopText = styled.p`
    font-size: 17px;
    margin-right: 40px ;
    text-decoration: underline;
    ${mobile({fontSize: "12px", marginRight: "10px"})}
`
const Bottom = styled.div`
    display: flex;
    height: 50%;
    ${mobile({height: "fit-content"})}
`
const Info = styled.div`
    flex: 3;
    height: fit-content;
    ${mobile({})}
`
const Product = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    ${mobile({flexDirection: "column",})}
`
const ProductDetails = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    ${mobile({width: "100%", justifyContent: "flex-start"})}
`
const Img = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    height: 100%;
    object-fit: cover;
    margin-left: 10px;
    ${mobile({width: "40%"})}
`
const Details = styled.div`
    width: 60%;
    margin-left: 10px;
`
const ProductName = styled.h3`
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 15px;
    ${mobile({fontSize: "15px", marginBottom: "10px"})}
`
const ProductId = styled.span`
    font-size: 17px;
    margin-bottom: 15px;
    ${mobile({fontSize: "12px", marginBottom: "10px"})}
`
const ProductColor = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => props.bg};
    margin: 15px 0;
    ${mobile({height: "15px", width: "15px", margin: "10px 0 "})}
`
const ProductSize = styled.span`
     font-size: 17px;
     ${mobile({fontSize: "12px"})}
`
const PriceDetails = styled.div`
     width: 20%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-between;
     ${mobile({marginLeft: "20px", flexDirection: "row", width: "80%", })}
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
    ${mobile({marginTop: "5px", justifyContent: "center"})}
`
const Number = styled.p`
    height: 40px;
    width: 40px;
    font-size: 20px;
    border: 1px solid #555;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    border-radius: 50%;
    ${mobile({fontSize: "13px", height: "20px", width: "20px", margin: "0 5px",})}
`
const PriceProduct = styled.span`
    font-size: 25px;
    margin-bottom: 20px;
    ${mobile({fontSize: "18px", marginBottom: "0px"})}
`
const Summary = styled.div`
    padding: 20px;
    width: 20% ;  
    background-color: #ffcfd2;
    margin-right: 20px;
    /* height: fit-content; */
    margin-bottom: 10px;
    ${mobile({flex: "1", marginRight: "10px", padding: "10px"})}
`
const Hr = styled.hr`
    /* margin: 20px; */

`
const TitleSum = styled.h2`
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;
    ${mobile({fontSize: "13px", marginBottom: "10px"})}
`
const ProductOrder = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`
const ProductItem = styled.p`
    font-size: 18px;
    margin: 10px 0;
    ${mobile({fontSize: "10px"})}
`
const PriceItem = styled.p`
    margin-right: 30px;
    font-size: 18px;
    ${mobile({fontSize: "10px", marginRight: "0", marginLeft: "35px", marginBottom: "5px"})}
`
const AmountContainer = styled.div`
     width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`
const TitleAll = styled.h3`
    font-size: 23px;
    margin: 10px 0;
    ${mobile({fontSize: "13px"})}
`
const PriceAll = styled.p`
    font-size: 20px;
    margin-right: 30px;
    ${mobile({fontSize: "15px", marginRight: "0", marginLeft: "30px"})}
`
//https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
function Cart() {
    const quantity = useSelector(state => state.cart.quantity)
    const [qty, setQty] = useState(1)
    const products = useSelector(state => state.cart.product)
    const total = useSelector(state => state.cart.total)
    console.log("Cart nha",quantity, products, total)
    //  <ProductColor bg={product.color}/>
    //<ProductSize> Size : {product.size}</ProductSize> 
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <CartContainer>
                <Title>YOUR OWN CART</Title>
                <Top>
                    <Link to={`/`}>
                        <TopButton>CONTINUE SHOPPING</TopButton>
                    </Link>
                    <TopTexts>
                        <TopText>Shopping Bag ({quantity})</TopText>
                        <TopText>Wishing Lists (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {
                            products.map(product => {
                            return <>
                                <Product>
                                    <ProductDetails>
                                        <Img src={product.img}/>
                                        <Details>
                                            <ProductName>{product.title}</ProductName>
                                            <ProductId>Number Of Product : {product._id}</ProductId>
                                            <ProductColor bg={product.color}/>
                                            <ProductSize> Size : {product.size}</ProductSize> 
                                        </Details>
                                    </ProductDetails>
                                    <PriceDetails>
                                        <ProductAmountContainer>
                                            <Remove onClick={() => setQty(qty> 0 ? qty- 1 : 1)}/>
                                            <Number>{product.quantity}</Number>
                                            <Add onClick={() => setQty(qty+ 1)}/>
                                        </ProductAmountContainer>
                                        <PriceProduct>€ {product.price * product.quantity}</PriceProduct>
                                    </PriceDetails>
                                </Product>
                                <Hr/>
                                </>
                            })
                        }
                    </Info>
                    <Summary>
                        <TitleSum>YOUR ORDER</TitleSum>
                            {
                                products.map(product => {
                                    return <>
                                    <ProductOrder>
                                        <ProductItem>{product.title}</ProductItem>
                                        <PriceItem>€ {product.price * product.quantity}</PriceItem>
                                    </ProductOrder>
                                    <Hr/>
                                    </>
                                })
                            }
                        <AmountContainer>
                            <TitleAll>Total Amount</TitleAll>
                            <PriceAll>€ {total}</PriceAll>
                        </AmountContainer>
                    </Summary>
                </Bottom>
            </CartContainer>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default Cart
