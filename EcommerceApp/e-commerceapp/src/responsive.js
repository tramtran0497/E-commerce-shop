import {css} from 'styled-components'
//Mobile: Iphone X
export const mobile = (props) =>{
    return css `
        @media only screen and (max-width: 375px){
            ${props}
        }
    `
}

//Tablet Ipad
export const tablet = (props) =>{
    return css `
        @media only screen and (max-width: 768px){
            ${props}
        }
    `
}