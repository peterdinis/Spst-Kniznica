import { TableState } from "react-table";

export interface CustomTableState<T extends object> extends TableState<T> {
    pageIndex: number;
}

export interface TableBodyProps {
    class?: string;
    role?: string;
}

export interface ITableProps extends TableBodyProps {}