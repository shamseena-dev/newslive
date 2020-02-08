import React from 'react';

function Timer({timeNow}){
		return(
			<h6>{timeNow.toLocaleTimeString()}</h6>
			)
		
}
export default Timer;
