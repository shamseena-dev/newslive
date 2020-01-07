
import React from 'react';
import Card from '../card/card.component';
import './newsdisplay.styles.scss';

const Newsdisplay=({articlesArrayList})=> {
	return (
		<div className="newsDisplayDiv"> 
				    
		    {articlesArrayList.map((article,i)=>{
		    	return (
		    		<Card 
		    			key={i}
			    		title={article.title}
			    		author={article.author}
			    		image={article.urlToImage}
			    		content={article.content}
			    		source={article.source.name}
			    		url={article.url}
		    		/>
		    	)
		    })

		   }
		
		</div>
		);
}

export default Newsdisplay;
