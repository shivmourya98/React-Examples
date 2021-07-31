import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { TableBody, Tooltip } from '@material-ui/core';
import { TableBodyProps } from './types';
import { IndeterminateCheckbox } from '../checkbox/checkbox';

export default function TableBodyComponent<T extends object>(Props: TableBodyProps<T>) {

    const {
        prepareRow,
        page,
    } = Props.instance;

    const { isRowSelectable, tooltipMessageForDisabledRow, checkBoxSelection } = Props;

    return (
        <>
            <TableBody className="body">
                {page.map((row, i) => {
                    prepareRow(row);
                    const disabledSelection = isRowSelectable && isRowSelectable(row) || false;
                    return (
                        <TableRow {...row.getRowProps()} className="tr">
                            {(checkBoxSelection &&
                                <TableCell padding="checkbox" className="td">
                                    {
                                        (disabledSelection) ?
                                            <Tooltip title={tooltipMessageForDisabledRow || ""} placement="right">
                                                <span>
                                                    <IndeterminateCheckbox disabled={disabledSelection} />
                                                </span>
                                            </Tooltip>
                                            :
                                            <IndeterminateCheckbox disabled={disabledSelection} {...row.getToggleRowSelectedProps()} />
                                    }
                                </TableCell>
                            )}
                            {row.cells.map(cell => {
                                return (
                                    <TableCell {...cell.getCellProps()} className="td">
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
