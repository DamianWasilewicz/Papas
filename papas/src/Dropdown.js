import React from 'react';
import { Accordion } from '@material-ui/core';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import MenuItem from './MenuItem.js';
import './Dropdown.css';

function Dropdown(props) {

	return (
		<React.Fragment>
			<div className="Dropdown">
				<Accordion>
					<AccordionSummary
						aria-controls="panel1a-content"
					>
					<div className="category-name">{props.name}</div>
					</AccordionSummary>
					<AccordionDetails>
						{
							Object.keys(props.items).map((item, index) => (
								<div key={index} className="food-item">
									<MenuItem name={props.items[item]} />
								</div>
					))}
					</AccordionDetails>
				</Accordion>
			</div>
		</React.Fragment>
	)

}

export default Dropdown;