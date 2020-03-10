import React, { Component } from 'react';
import { Card, CardHeader, Avatar } from '@material-ui/core';
import axios from 'axios';

export default class User extends Component {
    // this component is getting user obj as props
    constructor() {
        super();
        this.state = {
            followers: []
        }
    }
    
    async componentDidMount() {
        try {
            const res = await axios.get(`https://api.github.com/users/${this.props.user.login}/followers`);
            this.setState({
                followers: res.data
            })
        } catch(err) {
            console.log(err);
        }
    }
    
    render() {
        const {name, login, avatar_url, location, followers, following} = this.props.user;
        return (
            <Card>
                <CardHeader 
                    avatar={
                        <Avatar src={avatar_url} alt={name} />    
                    }
                    title={name}
                    subheader={location}
                />
                <p>{`Name: ${name}`}</p>
                <p>{`Location: ${location}`}</p>
                <p>{`Followers: ${followers}`}</p>
                <p>{`Following: ${following}`}</p>
            </Card>
        )
    }
}
