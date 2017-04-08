import React, { Component } from 'react';
import { connect }              from 'react-redux';
import { fetchStories, fetchStoriesLastWeek }          from './../actions/index';
import { bindActionCreators }   from 'redux';
import _                          from 'lodash';
import DropDown from './dropDown.js';



class Stories extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
	    stories: [],
	  	lastWeek: [],
	    toShow600: '',
	    toShowLastweek: '',
	    mostFrequents: []
	  }
	  this.handleAction = this.handleAction.bind(this);
	}

	componentDidMount() {
		this.props.fetchStories().then(response => {
			this.setState({
			  stories: response.payload.data.hits
			})
		});
		this.props.fetchStoriesLastWeek().then(response => {
			this.setState({
			  stories: response.payload.data.hits
			})
		});
	}


	handleAction(value) {

		if(value === 'top10out600'){
			this.getMostFrequentWord600(this.state.stories);
		}else if(value === 'top10lastWeek'){
			this.getMostFrequentWordLastWeek(this.state.stories);
		}else{
			this.setState({
			  mostFrequents: []
			})
		}
	}

	getMostFrequentWord600(args){

		 let tagArray = _.pluck(args,'title');
		 let joinedArray = tagArray.join().split(' ');

		 var o = _(joinedArray).reduce(function(o, s) {
		     o.freq[s] = (o.freq[s] || 0) + 1;

		     if(!o.freq[o.most] || o.freq[s] > o.freq[o.most])
		         o.most = s;
		     return o;
		 }, { freq: { }, most: '' });

		 var obj = o.freq;
		 let keysSorted = Object.keys(obj).sort(function(a,b){return obj[b]-obj[a]})
		 
		 this.setState({
		 	mostFrequents: keysSorted.slice(0, 9)
		 });

	}

	getMostFrequentWordLastWeek(args){

		 let tagArray = _.pluck(args,'title');
		 let joinedArray = tagArray.join().split(' ');

		 var o = _(joinedArray).reduce(function(o, s) {
		     o.freq[s] = (o.freq[s] || 0) + 1;

		     if(!o.freq[o.most] || o.freq[s] > o.freq[o.most])
		         o.most = s;
		     return o;
		 }, { freq: { }, most: '' });

		 var obj = o.freq;
		 let keysSorted = Object.keys(obj).sort(function(a,b){return obj[b]-obj[a]})
		 
		 this.setState({
		 	mostFrequents: keysSorted.slice(0, 9)
		 });

	}

	render() {
		return (
			<section className="row">
      			<div className="col-full">
      				<h2>Discover the most current words</h2>
      				<DropDown handleAction={this.handleAction} />
      				<ul style={{ marginTop: '10px' }}>
      				{
      					this.state.mostFrequents.map((item, i) => {
      					    return (
      					        <li key={i}>
      					            {item}
      					        </li>
      					    )
      					})	
      				}
      				</ul>
      			</div>
      		</section>
		);
	}
}


export default connect(null, { fetchStories, fetchStoriesLastWeek })(Stories);
