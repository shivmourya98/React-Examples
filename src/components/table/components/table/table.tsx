import React from 'react'
import { useTable, usePagination, useRowSelect } from "react-table";
import { Paper, Table, TableContainer } from '@material-ui/core';
import Pagination from '../tablePagination/tablePagination'
import { TableProps } from './types';
import TableHeader from '../tableHeader/tableHeader'
import TableBodyComponent from '../tableBody/tableBody';

export default function GridComponent<T extends object>(Props: TableProps<T>) {
    const [pageNumber, setPageNumber] = React.useState(0);
    const [totalPageNumber, setTotalPageNumber] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const {
        columns,
        data,
        onPageChange,
        checkBoxSelection = false,
        onChangePerPage,
        totalPages,
        enablePagination = false,
        manualPagination = false,
        count = data.length,
        rowPerPageOptions = [5, 10, 25, 50],
        indexOfPage = 0,
        pageSizePerPage = (enablePagination) ? 5 : data.length,
    } = Props;

    React.useEffect(() => {
        setPageNumber(indexOfPage);
    }, [indexOfPage]);

    React.useEffect(() => {
        setTotalPageNumber(totalPages);
    }, [totalPages]);

    React.useEffect(() => {
        setRowsPerPage(pageSizePerPage);
        setTotalPageNumber(Math.ceil(count/rowsPerPage));
    }, [pageSizePerPage]);

    const instance = useTable(
        {
            columns,
            data,
            pageCount: totalPages,
            useControlledState: (state) => {
                return React.useMemo(
                    () => ({
                        ...state,
                        pageIndex: pageNumber,
                    }),
                    [state, pageNumber]
                );
            },
            manualPagination: manualPagination,
            initialState: { pageIndex: pageNumber, pageSize: rowsPerPage }
        },
        usePagination,
        useRowSelect
    );

    const onPageNumberChange = (value: number) => {
        (manualPagination && onPageChange) ? onPageChange(value) : setPageNumber(value);
        
    }

    const onRowsPerPageChange = (value: number) => {
        if(manualPagination && onChangePerPage) {
            onChangePerPage(value);
        } else {
            setRowsPerPage(value);
            setTotalPageNumber(Math.ceil(count/value));
        }
    }

    const {
        getTableProps,
        selectedFlatRows,
        state: { pageIndex, pageSize, selectedRowIds }
    } = instance;

    return (
        <>
            <Paper>
                <TableContainer style={{ height: 497 }}>
                    <Table stickyHeader aria-label="sticky table" {...getTableProps()}>
                        <TableHeader instance={instance} />
                        <TableBodyComponent instance={instance} />
                    </Table>
                </TableContainer>
            </Paper>
            {(enablePagination &&
                <Pagination
                    rowPerPageOptions={rowPerPageOptions}
                    count={count}
                    manualPagination={manualPagination}
                    pageSize={pageSize}
                    pageIndex={pageIndex}
                    onPageChange={onPageNumberChange}
                    onChangePerPage={onRowsPerPageChange}
                    totalPages={totalPageNumber}
                    instance={instance}
                />
            )}
        </>
    )
}
