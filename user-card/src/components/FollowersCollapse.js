import React, { Component, Fragment } from 'react';
import { Grid, CardContent, Typography, Collapse, CardActions, IconButton } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import Follower from './Follower';

export default class FollowersCollapse extends Component {
    // receives followers array via props
    render() {
        const { followers, expanded, handleExpand } = this.props;
        return (
            <Fragment>
                <CardActions disableSpacing>
                    <IconButton onClick={handleExpand} aria-expanded={expanded} aria-label="show more" >
                        <Typography variant="body2" color="textSecondary" component="p">
                                Followers:
                        </Typography>
                        { expanded ? <ExpandLess /> : <ExpandMore /> }
                    </IconButton>
                </CardActions>
                
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Grid container display='flex'>
                            { followers.map(follower => (
                                <Grid item key={follower.login} style={{width: '50%'}}>
                                    <Follower changeUser={this.props.changeUser} follower={follower} />
                                </Grid>
                            )) }
                        </Grid>
                    </CardContent>
                </Collapse>
            </Fragment>
        )
    }
}
