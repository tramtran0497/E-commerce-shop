import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Product from './Product'
import {productData} from '../data'
import axios from 'axios'
const Container = styled.div`
    display: flex;
    /* padding: 20px; */
    flex-wrap: wrap;
    justify-content: space-between; 
    /* flex-direction: column;
    align-items: center;*/
   
`
function Products({cat, filter, sort}) {
    //console.log(cat, filter, sort)
    //define product
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = async()=>{
            try{
                const res= await axios.get(cat && `http://localhost:5000/api/products?category=${cat}`)
                // console.log("Get Data",res) 
                setProducts(res.data)
            }catch(err){
                console.log(err)
            }
        };
        getProducts()
    },[cat])
    //console.log("Products", products)
    // update when changing filter
    const [filterProducts, setFilterProducts] = useState([])
    useEffect(()=>{
        cat && setFilterProducts(
            products.filter(item => Object.entries(filter).every(([key,value])=>{
               //console.log("_______",key, value, item)
               return  item[key].includes(value)
            })
        ))
    }, [products,filter, cat])
    //console.log("Filter",filterProducts)
    useEffect(()=>{
        if(sort === "newest"){
            // prev is data of products is filted 
            // updating object and array
            setFilterProducts(prev => [...prev].sort((a,b) => a.createdAt - b.createdAt))
        } else if(sort === "lower"){
            setFilterProducts(prev => [...prev].sort((a,b) => b.price - a.price))
        } else{
            setFilterProducts(prev => [...prev].sort((a,b)=> a.price - b.price))
        }
    }, [sort])
    return (
        <Container>
            {filterProducts.map(product => <Product product={product} key={product.id}/>)}
        </Container>
    )
}

export default Products
