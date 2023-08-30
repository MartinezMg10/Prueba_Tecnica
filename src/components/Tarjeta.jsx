import { Link } from "react-router-dom";

export const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const Tarjeta = ({ pokemon }) => {
  const type = pokemon.types[0].type.name

  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <article className="card h-[50vh] w-[22vw] border-2 rounded-[20px]  shadow-md bg-white">
        <div className="type-tags">
            <div
              style={{ backgroundColor: typeColors[type] }}
              className="type-tag h-[18vh] rounded-t-[20px]"
            ></div>
        </div>
        <div className="card-body flex flex-col justify-center items-center">
          <img
            className="h-[23vh] w-[15vw] mt-[-10vh] "
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`Pokemon ${pokemon.name}`}
          />
          <h1 className="card-body-title">
            <span className="font-bold text-xl">[{pokemon.id}] </span>
            <span className="font-bold text-xl">{pokemon.name} </span>
            {pokemon.stats[0].base_stat} HP
          </h1>
          <p className="card-body-text">{pokemon.base_experience} exp</p>
        </div>
        <div className="flex text-xs pt-5 items-center justify-center border-t-[1px] gap-5">
          <div className="card-footer-socia text-center flex gap-5">
            {pokemon.types.map((type, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg">Type</h3>
                <p className="text-lg">{type.type.name}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Tarjeta;
