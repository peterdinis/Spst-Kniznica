export interface ICategory {
    id?: number;
    name: string;
    description: string;
}

export type SearchCategoryVal = Pick<ICategory, 'name' | 'description'>;