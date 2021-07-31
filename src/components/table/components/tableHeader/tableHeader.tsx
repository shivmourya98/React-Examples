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
        getToggleAllRowsSelectedProps,
        getToggleAllPageRowsSelectedProps
    } = Props.instance;
    const { selectPageWise, checkBoxSelection } = Props;
    return (
        <>
            <TableHead className="header">
                {headerGroups.map(headerGroup => (
                    <TableRow {...headerGroup.getHeaderGroupProps()} className="tr">
                        {(checkBoxSelection &&
                            <TableCell padding="checkbox" className="th">
                                {/* {
                                    (selectPageWise) ? <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
                                        : <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                                } */}
                                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                            </TableCell>
                        )}
                        {headerGroup.headers.map(column => (
                            <>

                                <TableCell className={`${classes.tableCell} th`} {...column.getHeaderProps({
                                    style: { minWidth: column.minWidth, width: column.width },
                                })}>
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
