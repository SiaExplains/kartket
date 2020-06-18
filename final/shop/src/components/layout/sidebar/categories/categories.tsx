import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

export default class categories extends Component {
    render() {
        return (
            <div>
                <Paper>
                    <MenuList>
                        <MenuItem>Laptops & Notebooks</MenuItem>
                        <MenuItem>Smart Phones</MenuItem>
                        <MenuItem>Accessories</MenuItem>
                        <MenuItem>Fashion & Clothes</MenuItem>
                        <MenuItem>Kitchen</MenuItem>
                        <MenuItem>Health and Beauty</MenuItem>
                        <MenuItem>Misc</MenuItem>
                    </MenuList>
                </Paper>
                <div>
                    <Popper
                        open={false}
                        role={undefined}
                        transition
                        disablePortal
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === 'bottom'
                                            ? 'center top'
                                            : 'center bottom',
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener
                                        onClickAway={() => {
                                            alert('ok');
                                        }}
                                    >
                                        <MenuList id='menu-list-grow'>
                                            <MenuItem>Profile</MenuItem>
                                            <MenuItem>My account</MenuItem>
                                            <MenuItem>Logout</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        );
    }
}
