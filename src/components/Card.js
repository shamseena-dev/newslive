import React from 'react';
import '../containers/App.css';

const Card=(props)=>{
	return(
		<div className="card">
			<img src={props.image}	alt="news_image" />
			<h1> {props.title}</h1>
			<h5>Source : {props.source}</h5>
			<p>{props.content}</p>
			<h5><a href={props.url} target="_blank" rel="noopener noreferrer">Click here</a> to  Read more</h5>			
		</div>
		)

}
export default Card;