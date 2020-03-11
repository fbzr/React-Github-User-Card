import React, { Component, Fragment } from 'react';
import { Card, CardHeader, Grid, CardContent, Avatar, Typography, Divider } from '@material-ui/core';
import FollowersCollapse from './FollowersCollapse';
import axios from 'axios';

export default class User extends Component {
    // this component is getting user obj as props
    constructor() {
        super();
        this.state = {
            followers: [],
            expanded: false
        }
    }

    async componentDidUpdate(prevProps, prevState) {
        if( prevProps !== this.props ) {
            try {
                const res = await axios.get(`https://api.github.com/users/${this.props.user.login}/followers`);
                this.setState({
                    ...this.state,
                    expanded: false,
                    followers: res.data
                })
            } catch(err) {
                console.log(err);
            }
        }
    }

    handleExpand = e => {
        this.setState({
            ...this.state,
            expanded: !this.state.expanded
        })
    }
    
    render() {
        const {name, login, avatar_url, location, followers, following, blog, bio} = this.props.user;
        return ( followers 
            ? <Card style={{width: '100%', marginBottom: '30px'}}>
                <CardHeader 
                    avatar={
                        <Avatar style={{width: '100px', height: '100px'}} src={avatar_url} alt={name} />    
                    }
                    title={`${name} (${login})`}
                    subheader={location}
                />
                <CardContent>
                    { bio && (
                    <Typography variant="body2" color="textSecondary" component="p">
                        {bio}
                    </Typography>
                    )}
                    { blog && (
                    <Typography variant="body2" color="textSecondary" component="p">
                        {blog}
                    </Typography>
                    )}
                    <Divider style={{margin: '8px 0'}} />
                    <Typography variant="body2" color="textSecondary" component="p">
                        {`Followers: ${followers}`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {`Following: ${following}`}
                    </Typography>
                    <Fragment>
                        <img style={{maxWidth: '100%', marginTop: '8px'}} src={`http://ghchart.rshah.org/${login}`} alt="2016rshah's Github chart" />
                        <Divider style={{margin: '8px 0'}} />
                    </Fragment>
                </CardContent>
                { (this.state.followers.length > 0) && <FollowersCollapse changeUser={this.props.changeUser} handleExpand={this.handleExpand} expanded={this.state.expanded} followers={this.state.followers} /> }
            </Card> 
            : null
        )
    }
}
