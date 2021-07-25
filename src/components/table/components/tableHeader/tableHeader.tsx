import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useStyles } from './style';
import { TableHeaderProps } from './types';
import { IndeterminateCheckbox } from '../checkbox/checkbox';

export default function TableHeader<T extends object>(Props: TableHeaderProps<T>) {
    const classes = useStyles();
    const {
        headerGroups,
        getToggleAllRowsSelectedProps
    } = Props.instance;

    console.log(Props.instance);

    return (
        <>
            <TableHead>
                {headerGroups.map(headerGroup => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        <TableCell padding="checkbox">
                            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()}/>
                        </TableCell>
                        {headerGroup.headers.map(column => (
                            <>

                                <TableCell className={classes.tableCell} {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </TableCell>
                            </>
                        ))}
                    </TableRow>
                ))}
            </TableHead>

        </>
    )
}
