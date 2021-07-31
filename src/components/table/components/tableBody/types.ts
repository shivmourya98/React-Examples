import { TableInstance, UseTableRowProps } from "react-table";

export type TableBodyProps<T extends object> = {
    instance: TableInstance<T>;
    selectPageWise: boolean;
    isRowSelectable?: (row: UseTableRowProps<T>) => boolean;
    tooltipMessageForDisabledRow?: string;
    checkBoxSelection: boolean;
};