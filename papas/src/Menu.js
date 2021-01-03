import React, { useState } from 'react';
import Dropdown from './Dropdown.js';
import './Menu.css';

function Menu() {

	const [categories, setCategories] = useState(
		{
			"SEAFOOD" : ["Fish Sandwich", "Fish n Chips", "Fried Clam Strips", 
			"Fish Sandwich", "Fish n Chips", "Fried Clam Strips"], 

			"MEXICAN" : ["Burrito", "Taco", "Burrito", "Taco", "Burrito", "Taco"],

			"SANDWICHES" : ["Burrito", "Taco", "Burrito", "Taco", "Burrito", "Taco"],

			"WINGS" : ["Burrito", "Taco", "Burrito", "Taco", "Burrito", "Taco"],

			"TASTE OF THE MIDDLE EAST" : ["Burrito", "Taco", "Burrito", "Taco", "Burrito", "Taco"],

			"APPETIZERS" : ["Burrito", "Taco", "Burrito", "Taco", "Burrito", "Taco"],

			"DESSERTS" : ["Burrito", "Taco", "Burrito", "Taco", "Burrito", "Taco"],

			"BEVERAGES" : ["Burrito", "Taco", "Burrito", "Taco", "Burrito", "Taco"],
		}
		);
	return (
		<React.Fragment>
			<div className="Menu">
				<h2 className="Title">MENU</h2>
				{
					Object.keys(categories).map((category, index) =>(
						<div key={index} className="food-category">
							<Dropdown name={category} items={categories[category]}/>
						</div>
				
				))}
			</div>
		</React.Fragment>
		);
}

export default Menu;