import React from 'react';
import Logo from './components/logo/logo.component';
import Searchbar from './components/searchbar/searchbar.component';
import Newsdisplay from './components/newsdisplay/newsdisplay.component';
import Empty from './components/empty/empty.component';
import Footer from './components/footer/footer.component';
import Timer from './components/timer/timer.component.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



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
		let cnnNews = this.state.newsDisplayed.filter(article=>{
			return article.source.name.toLowerCase().includes("CNN".toLowerCase());
			});
		let bbcNews = this.state.newsDisplayed.filter(article=>{
			return article.source.name.toLowerCase().includes("BBC".toLowerCase());
			});
		var display;
		var timer= <Timer timeNow={this.state.time}/>;

		/*Check if the search result is empty or not 
		if(filteredNews.length!==0){
			display= <Newsdisplay articlesArrayList={filteredNews} />
			}
		else{
			display= <Empty />
			}  */
		return(
			<div>
			  <BrowserRouter >
				{/* All components to be rendered*/}
				<Logo timer={timer} />
				{/*<Searchbar searchChange={this.onSearchChange} /> 

				{display} 
			{/*Either NewsDisplay component or Empty component*/}
			  {/*}  <Searchbar searchChange={this.onSearchChange} /> 
			    <Newsdisplay articlesArrayList={cnnNews} />  */}
			     <Searchbar searchChange={this.onSearchChange} /> 
			     <Switch >
				    <Route path = "/" exact component = {(props)=><Newsdisplay {...props} articlesArrayList={filteredNews} /> } />
				    <Route path = "/cnn" exact component = {(props)=><Newsdisplay {...props} articlesArrayList={cnnNews} /> } />
				    <Route path = "/bbc" exact component = {(props)=><Newsdisplay {...props} articlesArrayList={bbcNews} /> } />
			   
			    </Switch>
				<Footer/>
			  </BrowserRouter >
			</div>
			)
		};
		
}

export default App;
