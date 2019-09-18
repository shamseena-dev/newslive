import React from 'react';
import '../containers/App.css';
import logo from '../earth123.svg';

function Logo ({timer}) {
	return (
		<div className="logoDiv">
			<div className="logo">
				<img src={logo} className="App-logo" alt="Logo"/> 
				<h1 className="logoName"> News<span style={{color:"blue"}}>Live</span></h1> 
			</div>
			<h5 className="timer"> {timer}</h5>

		</div>
		);
}

export default Logo;