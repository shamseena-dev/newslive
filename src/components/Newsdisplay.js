import React from 'react';
import Card from './Card';
import '../containers/App.css';

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
