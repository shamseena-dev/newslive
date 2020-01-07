import React from 'react';

function Timer({timeNow}){
		return(
			<h2>{timeNow.toLocaleTimeString()}</h2>
			)
		
}
export default Timer;