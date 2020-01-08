import React from 'react';
import './logo.styles.scss';
import logo from './logo1.svg';
import {Link} from 'react-router-dom';

function Logo ({timer}) {
	return (
		<div className="logoDiv">
			<div className="logo">
				<img src={logo} className="App-logo" alt="Logo"/> 
				<h1 className="logoName"> News<span style={{color:"blue"}}>Live</span></h1> 
			</div>
			<div className= "topRight">
				<ul className= "navLinks">
				<Link to = "/" >
				     <li className= "navItem">Home </li></ Link>
				<Link to = "/bbc" >
				     <li className= "navItem">BBC </li></ Link>
				<Link to = "/cnn" >
				     <li className= "navItem">CNN </li></ Link>
				</ul>
				<h5 className="timerDisplay"> {timer}</h5>
			</div>

		</div>
		);
}

export default Logo;