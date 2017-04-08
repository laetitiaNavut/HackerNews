import React, { Component } from 'react';   
import { fetchStories }     from './../actions/index';

const options = [
        {
            text: 'Select ...',
            value: 'dflt'
        },
        {
            text: 'Top 10 most occurring words in the titles of the last 600 stories',
            value: 'top10out600'
        },
        {
            text: 'Top 10 most occurring words in the titles of exactly the last week',
            value: 'top10lastWeek'
        }
    ];

export default class DropDown extends Component {

    constructor(props) {
      super(props);
      this.state = {
        selected: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({
           selected: e.target.value
        });
        this.props.handleAction(e.target.value);
    }

    render() {       
        return (
            
            <select
                    className='form-control' 
                    value={this.state.selected} 
                    onChange={this.handleChange}
                    style={{ marginTop: '30px', display: 'block' }}>
                    {
                        options.map((option) => {
                            return (
                                <option defaultValue={this.state.selected} key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            )
                        })
                    }
            </select>
        );
    }
}

// export default connect(null, { fetchStories })(DropDown);