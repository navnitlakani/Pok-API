import React, { useEffect, useState } from "react";
import "../App.css";
import { fetchPokemons, fetchPokemon } from "../api";
import { IPokemon, IPaginationProps } from "../types";
import PokemonCard from "../components/PokemonCard";

function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [paginationProps, setPaginationProps] = useState<IPaginationProps>({
    next: "",
    previous: "",
    count: 0,
  });

  const getPokemons = async (api: string = "") => {
    const responsePokemons = await fetchPokemons({ api });
    const pokemons = await responsePokemons.json();
    const { results, ...rest } = pokemons;

    setPokemons(results);
    setPaginationProps(rest);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const pokemonsWithDetailPromise = pokemons.map(
        async (pokemon: IPokemon) => {
          const responsePokemon = await fetchPokemon({ api: pokemon.url });
          const pokemonDetail = await responsePokemon.json();
          return {
            name: pokemon.name,
            url: pokemon.url,
            detail: pokemonDetail,
          };
        }
      );
      const pokemonsWithDetail = await Promise.all(pokemonsWithDetailPromise);
      setPokemons(pokemonsWithDetail);
    }
    if (pokemons.length > 0) {
      fetchData();
    }
  }, [paginationProps.next]);

  return (
    <div className="poke-card py-5 ">
      <div className="container">
        <div className="row">
          {pokemons.map((pokemon: IPokemon) => {
            return <PokemonCard pokemon={pokemon} />;
          })}
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="step-btn">
              <span
                onClick={() => {
                  if (paginationProps.previous) {
                    getPokemons(paginationProps.previous);
                  }
                }}
              >
                Previous
              </span>

              <span
                onClick={() => {
                  if (paginationProps.next) {
                    getPokemons(paginationProps.next);
                  }
                }}
              >
                Next
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
