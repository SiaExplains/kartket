import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { connect } from 'react-redux';
import * as actions from '../../../../redux/tag/tag.action';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const TagComponent = (props) => {
    const classes = useStyles();

    return (
        <div>
            <h3>Tag Component</h3>
            <br />
            <div>
                <label>Title:</label>
                <input placeholder='title' />
            </div>
            <div>
                <label>Description:</label>
                <input placeholder='description' />
            </div>
            <div>
                <Button onClick={() => props.save()}>Save</Button>
                <Button>Cancel</Button>
            </div>
            <br />
            <div>
                <Table className={classes.table} aria-label='customized table'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell align='right'>
                                Title
                            </StyledTableCell>
                            <StyledTableCell align='right'>
                                Description
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.tags ? (
                            props.tags.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component='th' scope='row'>
                                        {row.id}
                                    </StyledTableCell>
                                    <StyledTableCell align='right'>
                                        {row.title}
                                    </StyledTableCell>
                                    <StyledTableCell align='right'>
                                        {row.description}
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))
                        ) : (
                            <span>There is no tag already.</span>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    tags: state.tag,
});

const mapDispatchToProps = (dispatch) => ({
    save: (tag) => dispatch(actions.addTag(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TagComponent);
