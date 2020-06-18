import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import React, { Component } from 'react';

export default class header extends Component {
    render() {
        return (
            <div>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label='open drawer'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' noWrap>
                            Kartket
                        </Typography>
                        <div>
                            <div>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder='Search…'
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div />
                        <div>
                            <IconButton
                                aria-label='show 4 new mails'
                                color='inherit'
                            >
                                <Badge badgeContent={4} color='secondary'>
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                aria-label='show 17 new notifications'
                                color='inherit'
                            >
                                <Badge badgeContent={17} color='secondary'>
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                edge='end'
                                aria-label='account of current user'
                                aria-haspopup='true'
                                color='inherit'
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton
                                aria-label='show more'
                                aria-haspopup='true'
                                color='inherit'
                            >
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
