import { HeaderGroup, UsePaginationInstanceProps, UsePaginationState } from 'react-table';

export interface IBook {
  id?: number;
  externalId?: string;
  name: string;
  description: string;
  authorId: number;
  year: number;
  pages: number;
  publisher: string;
  image: string;
  status: string;
  categoryId: number;
}

export interface IBookResult {
  data: Record<string, IBook>;
}


export type IUpdateBook = Partial<IBook>;
export type IBookInfo = Partial<IBook>;

export interface IBookInfoUpdate extends IBookInfo, UsePaginationState<IBookInfo>, UsePaginationInstanceProps<IBookInfo> {
  headerGroups?: HeaderGroup<IBookInfo>[];
  getTableBodyProps: any;
  prepareRow: (...args: unknown[]) => void;
}