import React from 'react';
import '../containers/App.css';


const Searchbar= ({searchChange,timer})=>{

			return(
			<div className="search">
				<h1>Get Worldwide Top Live News </h1>
				<h2>From over 30,000 news sources and blogs</h2>
				<input 
					type="search" 
					placeholder="search headlines here" 
					className="searchBar" 
					onChange={searchChange} />
				<h5> {timer}</h5>

				{/*<button 
					type="button" 
					className="buttonSearch"
					>Search</button>
				*/}

				
			</div>
			);
	}

export default Searchbar;