import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
      	<div id="logo-container">
      		<div id="logo"><a href="/">Hacker News App</a></div>
      		<div id="subtitle">All he best news for the Hacker community</div>
      	</div>
      	<nav>
      		<ul>
      			<li><a href="/">Home</a></li>
      			<li><a href="/stories">Stories</a></li>
      		</ul>
      	</nav>
      </header>
    );
  }
}



