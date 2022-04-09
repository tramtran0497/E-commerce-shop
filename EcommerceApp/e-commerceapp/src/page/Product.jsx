import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import NewsLetter from '../Components/NewsLetter'
import { Remove, Add } from '@material-ui/icons'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Container = styled.div`

`
const Wrapper = styled.div`
    display: flex;
    height: 80vh;
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
    ${mobile({height: "fit-content", flexDirection: "column"})}
`
const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
`
const Img = styled.img`
    height: 80%;
    object-fit: cover;
    width: 100%;
    ${mobile({height: "30vh", width: "100%"})}
`
const InfoContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    ${mobile({flex: "1", padding: "15px"})}
`
const Title = styled.h1`
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 20px;
    ${mobile({fontSize: "25px", textAlign: "center", marginBottom: "10px"})}
`
const Description = styled.p`
    font-size: 17px;
    color: #555;
    letter-spacing: 1px;
    margin-bottom: 20px;
    width: 80%;
    text-align: justify;
    ${mobile({fontSize: "13px", width: "100%", marginBottom: "10px"})}
`
const Euro = styled.span`
    font-size: 23px;
    
`
const Price = styled.span`
    font-size: 35px;
    font-weight: 700;
    color: #ae2012;
    margin-bottom: 20px;
    ${mobile({fontSize: "30px", width: "100%", marginBottom: "10px", textAlign: "center"})}
`
const OldPrice = styled.span`
    font-size: 20px;
    text-decoration: line-through;
    color: black;
`
const FilterContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin-bottom: 20px;
    ${mobile({flexDirection: "column", marginBottom: "10px", width: "100%"})}
`
const FilterColor = styled.div`
    display: flex;
    align-items: center;
    ${mobile({marginBottom: "10px"})}
`
const FilterTitle = styled.h3`
    font-size: 15px;
    font-weight: 400;
    margin-left: 15px;
    margin-right: 5px;
    ${mobile({fontSize: "15px",})}
`
const OptionColor = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props =>props.bg};
    margin-right: 10px;
    ${mobile({width: "15px", height: "15px",})}
`
const FilterSize = styled.div`
    display: flex;
    align-items: center;
    margin: 0px;
    ${mobile({marginBottom: "10px"})}
`
const Select = styled.select`
    padding: 8px;
    font-size: 13px;
    ${mobile({padding: "5px", fontSize: "10px",})}
`
const Option = styled.option`

`
const AddIcon = styled.div`
    display: flex;
    align-items: center;
`
const Number = styled.p`
    font-size: 16px;
    margin: 0 5px ;
    border: 1px solid gray ;
    padding: 8px 16px;
    ${mobile({fontSize: "13px",  padding: "5px 10px"})}
`
const Button = styled.button`
    width: 130px;
    height: 50px;
    border-radius: 30px;
    border: none;
    padding: 5px;
    color: white;
    background-color: #780000;
    font-size: 15px;
    transition: all 0.25s ease-in;
    &:hover{
        background-color:#f48c06 ;
        color: white;
    }
    ${mobile({width: "100px", height: "40px", fontSize: "13px", textAlign: "center",})}
`
//  {product.color.map(each => <OptionColor bg={each}></OptionColor>)}             
//  {product.size.map(each => <Option>{each}</Option>)}
function Product() {
    const location = useLocation()
    const _id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({})
    useEffect(()=>{
        const getProduct = async ()=>{
            try{
                const res = await axios.get(_id && `http://localhost:5000/api/products/find/${_id}`)
                setProduct(res.data)
                console.log(res)
            }catch(err){
                console.log(err)
            }
        }
        getProduct()
    }, [_id])
    //console.log(_id)
    // product.color.map(each => console.log(each)) solved it by first asking if the array existed. using ? between color and map
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("pink")
    const [size, setSize] = useState("S")
    const dispatch = useDispatch()
    const handleClick = () =>{
        // update a cart
        dispatch( addProduct({...product, quantity, color, size}))
    }
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Img src={product.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Description>{product.desc}</Description>
                    <Price><Euro>€</Euro>{product.price} <OldPrice>€{product.price * 2}</OldPrice></Price>
                    <FilterContainer>
                        <FilterColor>
                            <FilterTitle>Color</FilterTitle>    
                            {product.color?.map((color) => (<OptionColor bg={color} key={color} onClick={() => setColor(color)}/>))}
                        </FilterColor>
                        <FilterSize>
                            <FilterTitle>Size</FilterTitle>
                            <Select onChange={(e) => {setSize(e.target.value)
                               // why we need ?? because we need value of color, size and quantity console.log(e.target.value)
                            }}>
                               {product.size?.map((size) => (
                                   <Option key={size}>{size}</Option>
                               ))}
                               
                            </Select>
                        </FilterSize>
                        <AddIcon>
                            <FilterTitle>Amount</FilterTitle>
                            <Remove onClick = {() => setQuantity(quantity > 1 ? quantity - 1 : 1)}/>
                            <Number>{quantity}</Number>
                            <Add onClick = {() => setQuantity(quantity + 1)}/>
                        </AddIcon>
                    </FilterContainer>
                    <Button onClick={handleClick}>Add My Cart</Button>
                </InfoContainer>
            </Wrapper>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default Product
