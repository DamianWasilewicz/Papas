import React, {} from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
    display = flex;
    align-items: center;
    flex-direction: row;
    font-family: 'Saira Extra Condensed', sans-serif;
    font-size: 20px;
    color: #FFFFFF;
    margin=0px;
`

const Styledul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 15px 10px 10px 30px;
    overflow: hidden;
    background-color: #B05C54;
`;

const Styledli = styled.li`
    float: left;
    font-size: 130%;
    padding-right: 60px;
    height: 50px;
    background-color: transparent;
`;

const StyledRightli = styled(Styledli)`
    float: right;
    top: 2000px;
`;

const Styleda = styled.a`
    display: block;
    color: white;
    text-align: center;
    padding: 0px 20px 0px 20px;
    text-decoration: none;
`;


const Styledimg = styled.img`
height: 68%;
padding: 0px;
width: auto;
`;

const Styledbutton = styled.button`
border: none;
outline: none;
color: white;
background-color: inherit;
font-family: inherit;
font-size: inherit;
margin: 0;
`;

const Styleda2 = styled.a`
float: none;
color: #FFFFFF;
padding: 12px 16px;
text-decoration: none;
display: block;
text-align: center;
`;

const StyledDiv3 = styled.div`
display: none;
text-align: center;
position: absolute;
top: 30px;
left: 320px;
background-color: rgba(176, 92, 84, .9);
width: 120px;
margin-top:30px;
z-index: 1;
`;

const StyledDiv2 = styled.div`
    &:hover {
        ${StyledDiv3} {
            display: block;
        }
    }
`;


const Styled2Div3 = styled.div`
    display: none;
    text-align: center;
    position: absolute;
    top: 30px;
    left: 150px;
    background-color: rgba(176, 92, 84, .9);
    width: 150px;
    margin-top:30px;
    z-index: 1;
`;

const Styled2Div2 = styled.div`
    &:hover {
        ${Styled2Div3} {
            display: block;
        }
    }
`;


const NavBarFunctionalComponent = (props) => {

    return(
        <StyledDiv>
            <Styledul>
                <Styledli><Link to="/"><Styleda>HOME</Styleda></Link></Styledli>
                <Styled2Div2>
                    <Styledli><Link to="/menu"><Styleda>MENU</Styleda></Link></Styledli>
                    <Styled2Div3>
                        <Styleda2 href="#">SEAFOOD</Styleda2>
                        <Styleda2 href="#">MEXICAN</Styleda2>
                        <Styleda2 href="#">SANDWICHES</Styleda2>
                        <Styleda2 href="#">WINGS</Styleda2>
                        <Styleda2 href="#">MIDDLE EASTERN</Styleda2>
                        <Styleda2 href="#">APPETIZERS</Styleda2>
                        <Styleda2 href="#">DESSERTS</Styleda2>
                        <Styleda2 href="#">BEVERAGES</Styleda2>
                    </Styled2Div3>
                 </Styled2Div2>
                <StyledDiv2>
                    <Styledli><Link to="/reviews"><Styleda>REVIEWS</Styleda></Link></Styledli>
                    <StyledDiv3>
                        <Styleda2 href="#">VIEW</Styleda2>
                        <Styleda2 href="#">WRITE</Styleda2>
                    </StyledDiv3>
                </StyledDiv2>
                <StyledRightli><Link to="/cart"><Styleda>CART</Styleda></Link></StyledRightli>
                <StyledRightli><Link to="/login"><Styleda>LOGIN</Styleda></Link></StyledRightli>
            </Styledul>
        </StyledDiv>

    );

}

export default NavBarFunctionalComponent;
