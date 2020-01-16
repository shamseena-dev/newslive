
import React from 'react';
import Card from '../card/card.component';
import Empty from '../empty/empty.component';
import './newsdisplay.styles.scss';

const Newsdisplay=({articlesArrayList})=> {

		if(Object.keys(articlesArrayList).length === 0){

		return (<Empty />)
	    }
	    else{
		return (<div className="newsDisplayDiv"> 
				    
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
		
		</div>);
	}
	
}

export default Newsdisplay;
