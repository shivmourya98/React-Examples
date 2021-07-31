import React, { useState } from 'react'
import GridComponent from './components/table/table';
import { Column, UseTableRowProps } from "react-table";
import { IColumn } from './components/table/types';

function TableComponent() {
    const [page, setPage] = useState(0);
    const [perPage, setPerPage] = useState(5);
    const [data, setData] = useState([
        {
            currency: "EUR",
            amount: 10000,
            date: "2020-01-01"
        },
        {
            currency: "EUR",
            amount: 11000,
            date: "2020-02-01"
        },
        {
            currency: "GBP",
            amount: 12000,
            date: "2020-01-01"
        },
        {
            currency: "EUR",
            amount: 10000,
            date: "2020-01-01"
        },
        {
            currency: "EUR",
            amount: 11000,
            date: "2020-02-01"
        },
        {
            currency: "EUR",
            amount: 10000,
            date: "2020-01-01"
        },
        {
            currency: "EUR",
            amount: 11000,
            date: "2020-02-01"
        },
        {
            currency: "GBP",
            amount: 12000,
            date: "2020-01-01"
        },
        {
            currency: "EUR",
            amount: 10000,
            date: "2020-01-01"
        },
        {
            currency: "EUR",
            amount: 11000,
            date: "2020-02-01"
        }          
    ]);

    interface IData {
        currency: string,
        amount: number,
        date: string
    }

    const columns: IColumn<IData> = [
        {
            Header: "Currency",
            accessor: "currency",
            sticky: "left",
            width: 400,
            minWidth: 400
        },
        {
            Header: "Amount",
            accessor: "amount",
            width: 400,
            minWidth: 400
        },
        {
            Header: "Date",
            accessor: "date",
            width: 400,
            minWidth: 400
        }
        
    ];

    const onPageChange = (page: number) => {
        setData([
            {
                currency: "EUR 1",
                amount: 10000,
                date: "2020-01-01"
            },
            {
                currency: "EUR",
                amount: 11000,
                date: "2020-02-01"
            },
            {
                currency: "GBP",
                amount: 12000,
                date: "2020-01-01"
            },
            {
                currency: "EUR",
                amount: 10000,
                date: "2020-01-01"
            },
            {
                currency: "EUR",
                amount: 11000,
                date: "2020-02-01"
            }
        ]);
        console.log("Manual Page");
        setPage(page);
    }

    const onChangePerPage = (value: number) => {
        console.log("Manual Per Page");
        setPage(0);
        setPerPage(value);
    }

    const isRowSelectable = (row: UseTableRowProps<any>) => {
        if(row.values?.currency === "GBP") return true;
        return false;
    }

    return (
        <>
            <GridComponent
                columns={columns}
                data={data}
                enablePagination={true}
                manualPagination={false}
                rowPerPageOptions={[5, 10, 25, 50]}
                count={10}
                pageSizePerPage={perPage}
                indexOfPage={page}
                onPageChange={onPageChange}
                onChangePerPage={onChangePerPage}
                totalPages={2}
                checkBoxSelection={true}
                // selectPageWise={true}
                isRowSelectable={isRowSelectable}
                tooltipMessageForDisabledRow={"This row is disabled against selection"}
            />
        </>
    )
}

export default TableComponent;
