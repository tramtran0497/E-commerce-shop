import styled from 'styled-components'
import React from 'react'
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'
const Container = styled.div`
    /* padding: 0 10px; */
`
function Home() {
    return (
        <Container className="home">
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default Home
