import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import {categoryData} from '../data'
import { mobile } from '../responsive'
const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 20px 0;
    ${mobile({flexWrap: "wrap", padding: "0", alignItems: "flex-start"})}
`
function Categories() {
    return (
        <Container>
            { categoryData.map(category => (<CategoryItem category={category} key={category.id}/>))}
        </Container>
    )
}
export default Categories
