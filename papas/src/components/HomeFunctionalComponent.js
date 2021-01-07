import React, {} from "react";
import styled from "styled-components";
import NavBarFunctionalComponent from "./NavBarFunctionalComponent";

const StyledDiv = styled.div`
    @import url('https://fonts.googleapis.com/css2?
    family=Saira+Extra+Condensed:wght@800&display
    =swap');
    display = flex;
    align-items: center;
    flex-direction: row;
    font-family: 'Saira Extra Condensed', sans-serif;
    color: #FFFFFF;
    width=inherit;
    height=200px;
`;

const Styledh1 = styled.h1`
    font-size: 220%;
    line-height:0px;
    left: 10px;
    margin-left: 60px;
`;

const Styledh2 = styled.h2`
    font-size: 60px;
    line-height:50px;
    margin-left: 60px;
    position: absolute;
    left: 240px;
    top: 110px;
    padding-top = 10px;
    padding-bottom = 0px;
`;

const Styled2h2 = styled(Styledh2)`
    left: 40px;
    top: 90px;
    font-size: 123px;
    letter-spacing: -1px;
`;

const Styled3h2 = styled(Styled2h2)`
    left: 175px;
    top: 250px;
    letter-spacing: 0px;
`;

const Styledtitlediv = styled.div`
    position: absolute;
    width: 900px;
    height: 200px;
    top: 90px;
`;

const Styledimg = styled.img`
    height: 68%;
    padding: 0px;
    width: auto;
`;

const Styledicondiv = styled.div`
    position: absolute;
    top: 30px;
    left: 100px;
`;

const HomeFunctionalComponent = (props) => {

    return(
        <>
        <StyledDiv>
            <div className = "container">
                <div className = "logopapa">
                    <Styledimg src="./logo.png"></Styledimg>
                </div>
                <div className = "title">
                    <Styledh2>Welcome to</Styledh2>
                    <Styledtitlediv>
                        <Styled2h2>PAPA PASQUALE’S </Styled2h2>
                        <Styled3h2>PIZZERIA </Styled3h2>
                    </Styledtitlediv>
                </div>
            </div>
            <div className="icons">
                <Styledicondiv>
                    <a href="https://web.facebook.com/papapasqualespizzeria/?_rdc=1&_rdr" target="_blank" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-instagram"></a>
                    <a href="#" className="fa fa-snapchat-ghost"></a>
                </Styledicondiv>
            </div>
        </StyledDiv>
        </>
    );

}

export default HomeFunctionalComponent;
