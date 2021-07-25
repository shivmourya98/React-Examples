import { TableInstance } from "react-table";

export type PaginationProps<T extends object> = {
    instance: TableInstance<T>;
    rowPerPageOptions: Array<number>;
    count: number;
    manualPagination: boolean;
    pageSize: number;
    pageIndex: number;
    onPageChange?: (page: number) => void;
    onChangePerPage?: (value: number) => void;
    totalPages: number;
};