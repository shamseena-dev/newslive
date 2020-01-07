import React from 'react';
import './logo.styles.scss';
import logo from './logo1.svg';

function Logo ({timer}) {
	return (
		<div className="logoDiv">
			<div className="logo">
				<img src={logo} className="App-logo" alt="Logo"/> 
				<h1 className="logoName"> News<span style={{color:"blue"}}>Live</span></h1> 
			</div>
			<h5>CNN News</h5>
			<h5 className="timer"> {timer}</h5>

		</div>
		);
}

export default Logo;