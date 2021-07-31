import React from 'react'
import { useTable, usePagination, useRowSelect } from "react-table";
import { Paper, Table, TableContainer } from '@material-ui/core';
import Pagination from '../tablePagination/tablePagination'
import { TableProps } from './types';
import TableHeader from '../tableHeader/tableHeader'
import TableBodyComponent from '../tableBody/tableBody';
import * as _ from "lodash";
import { useSticky } from 'react-table-sticky';
import styled from 'styled-components';

const Styles = styled.div`
  .table {
    .th,
    .td {
      background-color: #fff;
      overflow: hidden;
    }

    &.sticky {
      overflow: auto;
      .header,
      .footer {
        position: sticky;
        z-index: 1;
        width: fit-content;
      }
      [data-sticky-td] {
        position: sticky;
      }
      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #ccc;
      }
    }
  }
`;


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
        selectPageWise = false,
        isRowSelectable,
        tooltipMessageForDisabledRow = ""
    } = Props;

    React.useEffect(() => {
        setPageNumber(indexOfPage);
    }, [indexOfPage]);

    React.useEffect(() => {
        setTotalPageNumber(totalPages);
    }, [totalPages]);

    React.useEffect(() => {
        setRowsPerPage(pageSizePerPage);
        setTotalPageNumber(Math.ceil(count / rowsPerPage));
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
        useRowSelect,
        useSticky,
        (hooks) => {
            hooks.getToggleAllRowsSelectedProps = [
                (props, { instance }) => [
                    props,
                    {
                        onChange: (e: React.ChangeEvent<any>) => {
                            if (e.target.checked) {
                                const pageRowsId = _.map(instance.page, 'id');
                                const found = instance.selectedFlatRows.some(r => pageRowsId.indexOf(r.id) >= 0)
                                if (instance.selectedFlatRows.length > 0 && found) {
                                    instance.page.forEach((row) => {
                                        row.toggleRowSelected(false);
                                    });
                                } else {
                                    instance.page.forEach((row) => {
                                        const disabled = isRowSelectable && isRowSelectable(row);
                                        (disabled) ? row.toggleRowSelected(!disabled) : row.toggleRowSelected(true)
                                    });
                                }
                            } else {
                                instance.page.forEach((row) => {
                                    row.toggleRowSelected(false);
                                });
                            }
                        },
                        style: { cursor: "pointer" },
                        checked: instance.page.every((row) => row.isSelected),
                        title: "Toggle All Rows Selected",
                        indeterminate: Boolean(
                            !instance.isAllRowsSelected &&
                            Object.keys(instance.state.selectedRowIds).length
                        ),
                    },
                ],
            ];

            hooks.getToggleAllPageRowsSelectedProps = [
                (props, { instance }) => [
                    props,
                    {
                        onChange: (e: React.ChangeEvent<any>) => {
                            if (e.target.checked) {
                                const pageRowsId = _.map(instance.page, 'id');
                                const found = instance.selectedFlatRows.some(r => pageRowsId.indexOf(r.id) >= 0)
                                if (instance.selectedFlatRows.length > 0 && found) {
                                    instance.page.forEach((row) => {
                                        row.toggleRowSelected(false);
                                    });
                                } else {
                                    instance.page.forEach((row) => {
                                        const disabled = isRowSelectable && isRowSelectable(row);
                                        (disabled) ? row.toggleRowSelected(!disabled) : row.toggleRowSelected(true)
                                    });
                                }
                            } else {
                                instance.page.forEach((row) => {
                                    row.toggleRowSelected(false);
                                });
                            }
                        },
                        style: { cursor: "pointer" },
                        checked: instance.page.every((row) => row.isSelected)
                    },
                ],
            ];
        }
    );

    const onPageNumberChange = (value: number) => {
        (manualPagination && onPageChange) ? onPageChange(value) : setPageNumber(value);

    }

    const onRowsPerPageChange = (value: number) => {
        if (manualPagination && onChangePerPage) {
            onChangePerPage(value);
        } else {
            setRowsPerPage(value);
            setTotalPageNumber(Math.ceil(count / value));
        }
    }

    const {
        getTableProps,
        selectedFlatRows,
        state: { pageIndex, pageSize, selectedRowIds }
    } = instance;

    return (
        <Styles>
            <Paper>
                <TableContainer className="table sticky" style={{ width: 1000 }}>
                    <Table stickyHeader aria-label="sticky table" {...getTableProps()}>
                        <TableHeader instance={instance}
                            selectPageWise={selectPageWise}
                            checkBoxSelection={checkBoxSelection}

                        />
                        <TableBodyComponent instance={instance}
                            selectPageWise={selectPageWise}
                            isRowSelectable={isRowSelectable}
                            tooltipMessageForDisabledRow={tooltipMessageForDisabledRow}
                            checkBoxSelection={checkBoxSelection}
                        />
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
        </Styles>
    )
}
