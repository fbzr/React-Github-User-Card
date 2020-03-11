import React, { Component } from 'react';
import User from './components/User';
import { Grid, Typography } from '@material-ui/core';
import SearchUserForm from './components/SearchUserForm';
import fetchData from './data';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: {}
    }
  }

  handleSearch = async searchText => {
    const res = await fetchData(searchText);
    this.setState({ userData: res });
  }

  render() {
    return (
      <Grid container style={{marginTop: '50px'}} direction='column' alignItems='center'>
        <Grid item style={{maxWidth: '500px'}}>
          <Typography variant='h1'>Github Info</Typography>
          <SearchUserForm handleSearch={this.handleSearch} />
          <User changeUser={this.handleSearch} user={this.state.userData} /> 
        </Grid>
      </Grid>
    )
  }
}

