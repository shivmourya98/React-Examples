import { TableInstance } from "react-table";

export type TableBodyProps<T extends object> = {
    instance: TableInstance<T>
};