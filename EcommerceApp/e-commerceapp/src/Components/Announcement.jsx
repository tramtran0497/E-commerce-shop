import styled from "styled-components"
import {ShoppingBasket, CardGiftcard} from '@material-ui/icons'
import { mobile } from "../responsive"

const Container = styled.div`
    height: 30px;
    background-color: #8d0801;
    color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 400;
    ${mobile({fontSize: "10px" })}
`

function Announcement() {
    return (
        <Container>
            Black Firday is coming..., super sales for all products. Let's go shopping now! <ShoppingBasket style={{"margin": "0 4px"}}/> <CardGiftcard/>
        </Container>
    )
}

export default Announcement
