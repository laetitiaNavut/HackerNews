import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <section className="intro row">
        <div className="col-full">
        	<h3>
        		Welcome on Hacker News App!
        	</h3>
          <p>If you want to discover the 10 most current words used in the titles of the Hacker News users, please visit the stories page.</p>
        </div>
      </section>
    );
  }
}