import React from 'react';
import './card.styles.scss';

const Card=(props)=>{
	return(
		<div className="card">
			<img src={props.image}	alt="news_image" />
			<h3> {props.title}</h3>
			<h5>Source : {props.source}</h5>
			   
			<h5><a href={props.url} target="_blank" rel="noopener noreferrer">Click here</a> to  Read more</h5>			
		</div>
		)

}
export default Card;
