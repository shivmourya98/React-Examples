import React, { useState } from 'react'
import GridComponent from './components/table/table';
import { Column } from "react-table";

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
        }        
    ]);

    interface IData {
        currency: string,
        amount: number,
        date: string
    }

    const columns: Column<IData>[] = [
        {
            Header: "Currency",
            accessor: "currency"
        },
        {
            Header: "Amount",
            accessor: "amount"
        },
        {
            Header: "Date",
            accessor: "date"
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
            />
        </>
    )
}

export default TableComponent;
