export interface IBook {
    id?: number;
    name: string;
    description: string;
    author: string;
    image: string;
    year: string;
    status: string;
    pages: string;
    isbn: string;
    categoryId: number;
} 

export type SearchVal = Pick<IBook, 'name' |'author'>;