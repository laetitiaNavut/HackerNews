import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="row">
      	<div className="col-full">
      		<p>
      			© 2017 - Hacker News App by <a href="http://www.laezammit.com">Laetitia Zammit</a>
      		</p>
      	</div>
      </footer>
    );
  }
}