import React from 'react';
import '../containers/App.css';


class Empty extends React.Component{
	render(){
		return(
			<div className="empty">
				<h2>Oops!!! Sorry, looks like there are no search results for this keyword currently.</h2>
				<h3> Would you like to search something else? </h3>
			</div>
			)
	}
}
export default Empty;