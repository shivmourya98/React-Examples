import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { TableBody } from '@material-ui/core';
import { TableBodyProps } from './types';
import { IndeterminateCheckbox } from '../checkbox/checkbox';

export default function TableBodyComponent<T extends object>(Props: TableBodyProps<T>) {

    const {
        prepareRow,
        page,
    } = Props.instance;

    return (
        <>
            <TableBody>
                {page.map((row, i) => {
                    prepareRow(row)
                    return (
                        <TableRow {...row.getRowProps()}>
                            <TableCell padding="checkbox">
                                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                            </TableCell>
                            {row.cells.map(cell => {
                                return (
                                    <TableCell {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    )
                })}
            </TableBody>
        </>
    )
}
