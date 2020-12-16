import React from "react";
import { atom, useAtom } from "jotai";

import "./styles.css";

// https://pokeapi.co/api/v2/pokemon?limit=10000

const pokemonAtom = atom(async () =>
  fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
    .then((res) => res.json())
    .then((pokemon) => pokemon.results)
);
const first151Atom = atom((get) =>
  get(pokemonAtom).filter((_pokemon, i) => i < 150)
);

function getPokemon() {
  const [getFirstPokemon] = useAtom(first151Atom);
  return <div>{JSON.stringify(getFirstPokemon)}</div>;
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {getPokemon()}
    </div>
  );
}
