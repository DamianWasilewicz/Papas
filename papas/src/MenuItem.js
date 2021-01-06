import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function MenuItem(props) {

	return (
		<Card>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{props.name}
				</Typography>
			</CardContent>
			<CardMedia
				className="Food-pic"
				image="/static/yummy-food.jpg"
			/>
			<CardContent>
				$12.95
			</CardContent>
		</Card>
	)
}

export default MenuItem;