import { Column, UseTableRowProps } from "react-table";

export type IColumn<T extends object> = Column<T>[] & { sticky?: string };

export type TableProps<T extends object> = {
    data: T[];
    columns: IColumn<T>;
    rowPerPageOptions?: Array<number>;
    count?: number;
    manualPagination?: boolean;
    pageSizePerPage?: number;
    indexOfPage?: number;
    onPageChange?: (page: number) => void;
    onChangePerPage?: (value: number) => void;
    enablePagination?: boolean;
    totalPages: number;
    checkBoxSelection?: boolean;
    selectPageWise?: boolean;
    isRowSelectable?: (row: UseTableRowProps<T>) => boolean;
    tooltipMessageForDisabledRow?: string;
};