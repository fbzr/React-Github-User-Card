import React, { Component } from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core';

export default class Follower extends Component {
    handleChangeUser = () => {
        this.props.changeUser(this.props.follower.login);
    }

    // this component receives the follower user data via props
    render() {
        const { login, avatar_url } = this.props.follower;
        return (
            <ListItem style={{
                cursor: 'pointer'
            }} onClick={this.handleChangeUser} key={login} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={login} src={avatar_url} />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography component="span" variant="body2" color="textPrimary" >
                            {login}
                        </Typography>
                    }
                />
            </ListItem>
        )
    }
}
