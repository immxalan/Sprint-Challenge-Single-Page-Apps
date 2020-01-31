import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
export default function SearchForm() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then((res) => {
      console.log('response here', res);
      const filteredData = res.data.results.filter(item => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase())
      })
      setSearchResults(filteredData);
    })
    .catch((error) => {
      console.log('error', error);
    })
  }, [searchTerm])
  
  return (
    <section className="search-form">
      <label>
        Search for a character here:
        <input type='text' name='search' value={searchTerm} onChange={handleChange}/>
      </label>
      <h2> {searchResults.map(character => (
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
