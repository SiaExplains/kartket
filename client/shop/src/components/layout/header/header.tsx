import React, { Component } from 'react';
import {
    AppBar,
    IconButton,
    Typography,
    InputBase,
    Badge,
    Toolbar,
    MenuItem,
    Menu,
} from '@material-ui/core';
import {
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
    Search as SearchIcon,
    Mail as MailIcon,
    More as MoreIcon,
    AccountCircle as AccountCircleIcon,
} from '@material-ui/icons/';

import classes from './header.module.scss';

export default class header extends Component {
    render() {
        return (
            <AppBar position='static'>
                <Toolbar className={classes.header}>
                    <div className={classes.branding}>
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label='open drawer'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            className={classes.title}
                            variant='h6'
                            noWrap
                        >
                            Kartket
                        </Typography>
                    </div>

                    <div className={classes.searchbox}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            className={classes.searchInput}
                            placeholder='Search…'
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <div className={classes.icons}>
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
                            <AccountCircleIcon />
                        </IconButton>
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
        );
    }
}
