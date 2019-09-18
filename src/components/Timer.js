import React from 'react';
import '../containers/App.css';

function Timer({timeNow}){
		return(
			<h2>{timeNow.toLocaleTimeString()}</h2>
			)
		
}
export default Timer;