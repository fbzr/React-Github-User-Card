import React, { Component } from 'react';
import axios from 'axios';
import User from './components/User';
import { Grid, Typography } from '@material-ui/core';
import SearchUserForm from './components/SearchUserForm';

const fetchData = async login => {
  try {
    const res = await axios.get(`https://api.github.com/users/${login}`);
    return res.data;
  } catch(err) {
    return {};
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: {}
    }
  }

  async componentDidMount() {
    try {
      // Fetch data and set it to state
      const res = await axios.get('https://api.github.com/users/fbzr');
      console.log(res.data);
      this.setState({
        userData: res.data
      })
    } catch(err) {
      console.log(err);
    }
  }

  

  handleSearch = async (searchText) => {
    const res = await fetchData(searchText);
    this.setState({ userData: res });
  }

  render() {
    return (
      <Grid container style={{marginTop: '50px'}} direction='column' alignItems='center'>
        <Grid item style={{maxWidth: '500px'}}>
          <Typography variant='h1'>Github Info</Typography>
          <SearchUserForm handleSearch={this.handleSearch} />
          
          { this.state.userData 
          ? <User changeUser={this.handleSearch} user={this.state.userData} /> 
          : <Typography>No user found</Typography> }

        </Grid>
      </Grid>
    )
  }
}

