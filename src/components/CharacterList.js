import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
export default function CharacterList() {
  const [characterArray, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.log("Error has occurred", error);
      }) 
  }, []);

  return (
    <section className="Character-list">
      <h2> {characterArray.map(character => (
       <CharacterCard 
        key={character.id}
        img={character.image}
        name={character.name}
        status={character.status}
        location={character.location.name}
        origin={character.origin.name}
        />
                    ))
                }
            </h2>
    </section>
  );
}
