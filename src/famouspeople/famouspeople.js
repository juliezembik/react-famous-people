import React, { Component } from 'react';

class FamousPerson extends Component {
    constructor() {
        super();
        this.state = {
            fpName: 'Felicia Day',
            fpRole: 'The Guild'
        };
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            fpName: event.target.value,

        });
    }

    handleChange2 = (event) => {
        this.setState({
        fpRole: event.target.value
        });
    }
    render() {
        return (
            <div className='famous-people'>
                <h2>Type in a famous person's name:</h2>
                <br />
                <input onChange={this.handleChange} type="text" placeholder="Name" />
                <br />
                <p> {this.state.fpName} </p>
                <br />
                <h2>What were they cast in?</h2>
                <input onChange={this.handleChange2} type="text" placeholder="Cast In" />
                <p> {this.state.fpRole} </p>
            </div>
        )
    }
};

export default FamousPerson;