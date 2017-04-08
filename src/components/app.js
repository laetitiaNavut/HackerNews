import React, { Component } from 'react';
import Header from './header';
import Footer from './footer.js';


export default class App extends Component {
  render() {
    return (
    	<div id="content">
    		<Header />
      			{this.props.children}
    		<Footer />
    	</div>
    );
  }
}
