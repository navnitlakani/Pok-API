import { DEFAULT_LIMIT } from "../constants";

const baseAPI = 'https://pokeapi.co/api/v2/';

interface IFetchPokemonsProp {
    api: string,
    offset?: number,
    limit?: number
}
interface IFetchPokemonProps {
    api?: string,
    id?: string
}

const fetchPokemons = async ({ api = '', offset = 0, limit = DEFAULT_LIMIT }: IFetchPokemonsProp) => {
    if (api) {
        return await fetch(api)
    }
    return await fetch(baseAPI + `pokemon?limit=${limit}&offset=${offset}`);
}

const fetchPokemon = async ({ api = '', id }: IFetchPokemonProps) => {
    if (api) {
        return await fetch(api);
    }
    return await fetch(baseAPI + 'pokemon/' + id);
}

const fetchPokemonByName = async (name: any) => {
    return await fetch(baseAPI + `pokemon/` + name);
}


export {
    fetchPokemons,
    fetchPokemon,
    fetchPokemonByName,
}