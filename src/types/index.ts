export interface IPokemon {
    name: string,
    url: string,
    detail?: IPokemonDetail,
}

export interface IPaginationProps {
    count: number,
    next: string,
    previous: string
}

export interface Ability {
    name: string
}

export interface IPokemonDetail {
    abilities: Ability[],
    height: string,
    weight: string,
    sprites?: any
    id?: any
}