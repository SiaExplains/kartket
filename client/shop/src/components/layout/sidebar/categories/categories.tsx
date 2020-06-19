import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import CategoryModel from '../../../../models/category';
import CategoryService from '../../../../services/category.service';

interface States {
    categories: CategoryModel[];
}

interface Props {}
export default class CategoryCompoenent extends Component<Props, States> {
    categoryService: CategoryService = new CategoryService();
    constructor(props: Props) {
        super(props);

        this.state = {
            categories: [],
        };
    }

    componentDidMount() {
        this.categoryService.fetchAll().then((cat) => {
            this.setState({
                categories: cat,
            });
        });
    }

    render() {
        const { categories } = this.state;
        let categoriesRender: any[] = [];

        if (categories) {
            categoriesRender = categories.map((cat) => {
                return <MenuItem key={cat.id}>{cat.title}</MenuItem>;
            });
        }
        return (
            <div>
                <Paper>
                    <MenuList>{categoriesRender}</MenuList>
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
