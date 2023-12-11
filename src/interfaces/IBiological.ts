export interface IBiological {
    data: number[][],
    rows: IBiologicalItem[],
    columns: { id: string, metadata: null } [] 
}

export interface IBiologicalItem {
    id: string;
    metadata: IMetadata
}

export interface IMetadata {
    taxonomy: string[],
    tax_id: number,
    title: string,
    lineage: ILinage[],
    id: string,
 }

 export interface ILinage {
    rank: string,
    name: string,
    tax_id: number
 }