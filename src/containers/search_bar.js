import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
 
class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            term: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleInputChange (e) {
        this.setState({
            term: e.target.value
        });
    }
    handleFormSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({
            term: ''
        });
    }
    render() {
        return (
        <form onSubmit={this.handleFormSubmit} className='input-group'>
            <input
            value={this.state.term}
            onChange = {this.handleInputChange}
            placeholder='Enter the city you want to search'
            className='form-control' />
            <span className='input-group-btn'>
                <button 
                    className='btn btn-secondary'
                    type='submit'>Submit</button>
                </span>
        </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);