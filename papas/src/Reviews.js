import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import styled from "styled-components";
import Submit from './Submit.js';


const StyleDiv = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@800&display=swap');
	background-color: rgba(176, 92, 84, 1);
	color: white;
	font-family: 'Saira Extra Condensed', sans-serif;

`

const LeftHeaderDiv = styled.div`
	text-align: left;
	
`

const RightHeaderDiv = styled.div`
	text-align: right;
`

const ReviewDiv = styled.div`
	margin: auto;
	width: 100%;
	border: 20px blue;
`

const Inside = styled.div`
	position: relative;
	left: 175px;
`

const WriteReview = styled.div`
	border: 8px solid white;
	width: 950px;
	height: 250px;
	display: block;
	margin-left: auto;
	margin-right: auto;
	background-color: rgba(169, 66, 57, 1);
`

const Reviews = () => {
	const [login, set_login] = useState(false)

	const togglePop = () => {
		set_login(!login);
	};

	const clickSubmit = () => {
		<Link to="/reviews">Go to Reviews</Link>                   
	}

	// const writeReview = () => {
	// 	<Link to="/write">Go to Writing</Link>;

	// 	<Route exact path="/write">
	// 		<Submit />
	// 	</Route>
	// }

	return <div>
		<LeftHeaderDiv>
				<h1>REVIEWS</h1>
			</LeftHeaderDiv>
			<StyleDiv>
			<RightHeaderDiv className="btn" onClick={togglePop}>
				{/* <button onClick = {writeReview}>Write a Review Here!</button> */}
				{/* <Router>
					<Link to="/write">Write a Review Here!</Link>
					<Switch>
						<Route path="/write">
							<Submit />
						</Route>
					</Switch>
				</Router> */}
				<div>
                	<button>Write a Review Here!</button>
                  </div>
                  {login ? <Submit toggle={togglePop} /> : null}
             
				
			</RightHeaderDiv>
			<ReviewDiv>
				<h1>Jane Doe</h1>
				<p>This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review.</p>
			</ReviewDiv>
			<Inside>
				<h2>Write a Review!</h2>
			</Inside>
			<WriteReview>
				
			</WriteReview>
			<Inside>
				<button onClick = {clickSubmit}>Submit</button>
			</Inside>
			<ReviewDiv>
				<h1>Jane Doe</h1>
				<p>This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review.</p>
			</ReviewDiv>
			<ReviewDiv>
				<h1>Jane Doe</h1>
				<p>This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review.</p>
			</ReviewDiv>
			<ReviewDiv>
				<h1>Jane Doe</h1>
				<p>This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review. This is a review that is a very nice review.</p>
			</ReviewDiv>
		</StyleDiv>
	</div>
}


export default Reviews;