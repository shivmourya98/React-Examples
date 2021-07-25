import React from 'react'
import { Grid, IconButton, Paper } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { PaginationProps } from './types';
import { useStyles } from './style';

export default function Pagination<T extends object>(Props: PaginationProps<T>) {
    const classes = useStyles();
    const {
        onPageChange,
        onChangePerPage,
        count,
        rowPerPageOptions,
        pageIndex,
        pageSize,
        totalPages
    } = Props;

    const {
        setPageSize
    } = Props.instance;

    return (

        <Paper elevation={1}>
            <Grid container alignItems="center" justifyContent="flex-end" className={classes.paginationControl}>
                <Grid item>
                    Showing {pageIndex * pageSize + 1}-{((pageSize * pageIndex + pageSize) > count) ? count : pageSize * pageIndex + pageSize} of <span>{count}</span>
                </Grid>
                <Grid item>
                    <span className="rows-per-page">Rows per page:</span>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                            if (onChangePerPage) onChangePerPage(Number(e.target.value))
                        }}
                    >
                        {rowPerPageOptions.map(pageSize => (
                            <MenuItem key={pageSize} value={pageSize}>
                                {pageSize}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid item className={classes.page}>
                    Page: {pageIndex + 1}
                </Grid>
                <Grid item>
                    <IconButton aria-label="previous"
                        onClick={() => {
                            if (onPageChange) onPageChange(pageIndex - 1)
                        }}
                        disabled={pageIndex === 0 ? true : false}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                </Grid>
                <Grid>
                    <IconButton aria-label="next"
                        onClick={() => {
                            if (onPageChange) onPageChange(pageIndex + 1)
                        }}
                        disabled={(pageIndex + 1 === totalPages) ? true : false}
                    >
                        <ChevronRightIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    )
}
