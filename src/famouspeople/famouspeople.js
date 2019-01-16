import React, { Component } from 'react';

class FamousPerson extends Component {
    constructor() {
        super();
        this.state = {
            fpName: 'Felicia Day',
            fpRole: 'The Guild'
        };
    }
    //this changes name
    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            fpName: event.target.value,

        });
    }
    //this changes role
    handleChange2 = (event) => {
        this.setState({
        fpRole: event.target.value
        });
    }
    //add person
    addFamousPerson = (event) => {
        event.preventDefault(); //This stops the page from refreshing
        
    }
    render() {
        return (
            <form className='famous-people' onSubmit={this.addFamousPerson}>
                <h2>Type in a famous person's name:</h2>
                <br />
                <input onChange={this.handleChange} type="text" placeholder="Name" />
                <br />
                <p> {this.state.fpName} </p>
                <h2>What were they cast in?</h2>
                <input onChange={this.handleChange2} type="text" placeholder="Cast In" />
                <p> {this.state.fpRole} </p>
                <button type="submit">Submit</button>
            </form>
        )
    }
};

export default FamousPerson;