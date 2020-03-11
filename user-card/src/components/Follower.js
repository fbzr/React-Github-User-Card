import React, { Component } from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, withStyles } from '@material-ui/core';

 
const styles = theme => ({
    listItem: {
        cursor: 'pointer',
        transition: 'background-color 300ms',
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    }
})

class Follower extends Component {
    handleChangeUser = () => {
        this.props.changeUser(this.props.follower.login);
    }

    // this component receives the follower user data via props
    render() {
        const { login, avatar_url } = this.props.follower;
        
        return (
            <ListItem className={this.props.classes.listItem} onClick={this.handleChangeUser} key={login} alignItems="flex-start">
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

export default withStyles(styles)(Follower);
