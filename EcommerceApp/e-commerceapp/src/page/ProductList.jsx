import React, {useState} from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Products from '../Components/Products'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'
const Container = styled.div`
    
`
const Title = styled.h1`
    font-size: 40px;
    font-weight: 400;
    margin: 20px 30px;
    ${mobile({fontSize: "30px", textAlign: "center"})}
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 30px;
    ${mobile({margin: "0 15px"})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
    ${mobile({flexDirection: "column", alignItems: "flex-start"})}
   
`
const FilterText = styled.span`
    font-size: 20px;
    margin-right: 10px;
    ${mobile({fontSize: "15px",})}
`
const Select = styled.select`
    margin-left: 10px;
    padding: 3px 5px;
    border-radius: 10px;
    cursor: pointer;
    ${mobile({margin: "5px 0"})}
`
const Option = styled.option`
   
`
function ProductList() {
    const location = useLocation()
    //console.log(location.pathname.split("/")[2])
    const cat = location.pathname.split("/")[2]
    const [filter, setFilter] = useState({})
    const handleFilter = (e)=>{
        const value = e.target.value
        const name = e.target.name
        //console.log(value, name ) 
        setFilter({
            // problem overwrite value
            ...filter,
            [name]: value // [] showing the name, without it nothing except name
        })
    }
    //console.log(filter) 
    const [sort, setSort] = useState("newest")
    const handleSort = (e)=>{
        const value = e.target.value
        //console.log(value)
        setSort(value)
    }
    //console.log(sort) 
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>Your Fashion World : {cat} </Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilter}>
                        <Option disabled selected>Color</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                        <Option>Black</Option>
                        <Option>Yellow</Option>
                        <Option>Pink</Option>
                        <Option>White</Option>
                    </Select>
                    <Select name="size" onChange={handleFilter}>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select name="sort" onChange={handleSort}>
                        <Option disabled>--Select--</Option>
                        <Option value="newest">newest</Option>
                        <Option value="lower">lower Price</Option>
                        <Option value="higher">higher Price</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filter={filter} sort={sort}/>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
