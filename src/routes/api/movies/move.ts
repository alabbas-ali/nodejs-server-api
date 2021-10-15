
export enum MovieTypes {
    Action = 'Action',
    Adventure = 'Adventure',
    Comedy = 'Comedy',
    CrimeAndMystery = 'CrimeAndMystery',
    Fantasy = 'Fantasy',
}

export interface Movie {
    id: string
    name: string
    title: string
    diescription: string
    relaesDate: string
    long: number
    type: MovieTypes
}