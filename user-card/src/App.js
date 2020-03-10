import React, { Component } from 'react';
import axios from 'axios';
import User from './components/User';

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

  render() {
    return (
      <div>
        <User user={this.state.userData} />
      </div>
    )
  }
}

