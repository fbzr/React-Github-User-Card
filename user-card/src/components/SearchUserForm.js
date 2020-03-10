import React, { Component } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';

export default class SearchUserForm extends Component {
    constructor() {
        super();
        this.state = {
            searchText: ''
        }
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleSearch(this.state.searchText);
    }
    
    render() {
        return (
            <form style={{display: 'flex', width:'100%', marginBottom: '30px'}} onSubmit={this.handleSubmit}>
                <TextField style={{width: '100%'}} name='searchText' onChange={this.handleChange} label='Github username' />
                <IconButton type='submit'>
                    <Search />
                </IconButton>
            </form>
        )
    }
}
