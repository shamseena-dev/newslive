import React from 'react';

function Timer({timeNow}){
		return(
			<p>{timeNow.toLocaleTimeString()}</p>
			)
		
}
export default Timer;
