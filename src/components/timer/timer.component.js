import React from 'react';

function Timer({timeNow}){
		return(
			<h5>{timeNow.toLocaleTimeString()}</h5>
			)
		
}
export default Timer;
