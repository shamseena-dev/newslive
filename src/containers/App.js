import React from 'react';
import Logo from '../components/Logo';
import Searchbar from '../components/Searchbar';
import Newsdisplay from '../components/Newsdisplay';
import Empty from '../components/Empty';
import Footer from '../components/Footer';
import Timer from '../components/Timer.js';

import './App.css';


class App extends React.Component {
	/*constructor , and set initial state here*/
	constructor(){
		super();
		this.state={
			newsDisplayed:[],
			searchField:' ',
			time:new Date()		
		}
	}

   /*To fetch News API */
	componentDidMount(){
		setInterval(()=>this.currentTime(),1000)
		var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=23afc4d0ecd44a1388531295c8f399a2';
		fetch(url)
		.then(resp=>resp.json())
		.then(data=>{
			
			return this.setState({newsDisplayed:data.articles})
		});
	}

	/*Function to set state 'searchfield' in accordance with change in input in search bar*/
	onSearchChange=(event)=>{
		this.setState({searchField:event.target.value});
		}

	currentTime(){

		this.setState({time:new Date()});
	}
	/*render method */
	render(){
		let filteredNews=this.state.newsDisplayed.filter(article=>{
			return article.title.toLowerCase().includes(this.state.searchField.toLowerCase());
			});
		var display;
		var timer= <Timer timeNow={this.state.time}/>;

		/*Check if the search result is empty or not*/
		if(filteredNews.length!==0){
			display= <Newsdisplay articlesArrayList={filteredNews} />
			}
		else{
			display= <Empty />
			}
		return(
			<div>
				{/* All components to be rendered*/}
				<Logo timer={timer} />
				<Searchbar searchChange={this.onSearchChange} /> 
				{display} {/*Either NewsDisplay component or Empty component*/}
				<Footer/>
			</div>
			)
		};
		
}

export default App;
