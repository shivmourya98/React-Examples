import { Column } from "react-table";

export type TableProps<T extends object> = {
    data: T[];
    columns: Column<T>[];
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
};