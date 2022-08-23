import React from "react";
import { IPokemon } from "../types";
import { Link } from "react-router-dom";
interface IProps {
  pokemon: IPokemon;
}
function PokemonCard(props: IProps) {
  const { pokemon } = props;
  if (!pokemon.detail) {
    return null;
  }
  return (
    <div className="col-lg-3">
      <Link to={`/pokemon/${pokemon.name}`} state={pokemon}>
        <div className="card">
          <div className="card-image">
            <img src={pokemon.detail.sprites.front_default} alt="test"></img>
          </div>
          <div className="card-body">
            <h3 className="card-text">{pokemon.name}</h3>
            <div className="card-group">
              <ul>
                <li>
                  <span>Weight: </span> {pokemon.detail.weight}
                </li>
                <li>
                  <span>Height: </span> {pokemon.detail.height}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PokemonCard;
