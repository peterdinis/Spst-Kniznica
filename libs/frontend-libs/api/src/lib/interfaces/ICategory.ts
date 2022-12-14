export interface ICategory {
    id?: number;
    name: string;
    description: string;
}

export type SearchVal = Pick<ICategory, 'name' | 'description'>;