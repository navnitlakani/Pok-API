import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchPokemonByName } from "../api";

function PokemonDetail() {
  const location: any = useLocation();

  const [pokemon, setPokemon] = useState<any>(null);
  const params = useParams();

  useEffect(() => {
    if (location.state) {
      setPokemon(location.state.detail);
      return;
    }
    async function fetchData() {
      const responsePokemons = await fetchPokemonByName(params.name);
      const _Pokemon = await responsePokemons.json();
      
      setPokemon(_Pokemon);
    }
    fetchData();
  }, []);

  if (!pokemon) {
    return null;
  }

  return (
    <div className="poke-card-detail py-5 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-4">
                <div className="card-detail-image text-center">
                  <img src={pokemon.sprites.front_default} alt="test"></img>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="card-detail-body">
                  <h3 className="card-detail-text">{pokemon.name}</h3>
                  <div className="card-detail-sub">
                    <ul>
                      {pokemon.abilities?.map((data: any) => {
                        return <li>{data.ability.name}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="card-detail-group">
                    <ul>
                      <li>
                        <span>Weight: </span> {pokemon?.weight}
                      </li>
                      <li>
                        <span>Height: </span> {pokemon?.height}
                      </li>
                      <li>
                        <span>Id: </span> {pokemon?.id}
                      </li>
                      <li>
                        <span>Order: </span> {pokemon?.order}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
