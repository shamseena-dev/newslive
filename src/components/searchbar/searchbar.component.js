import React from 'react';
import './searchbar.styles.scss';


const Searchbar= ({searchChange})=>{

			return(
			<div className="search">
				<h1>Worldwide Top Live News </h1>
				<h2>From over 30,000 news sources and blogs</h2>
				<input 
					type="search" 
					placeholder="search headlines here" 
					className="searchBar" 
					onChange={searchChange} />
				
			</div>
			);
	}

export default Searchbar;