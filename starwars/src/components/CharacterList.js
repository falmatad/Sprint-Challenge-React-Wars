import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

// import components

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState([]);

	useEffect(() => {
		axios.get(`https://swapi.co/api/people/`)
			.then(response => {
                setCharacters(response.data.results);
                console.log(response.data.results.name);
			})
			.catch(error => {
				console.log(error);
			});

    }, []);
    const Container = styled.div`
        background: #8db4ca;
        /* width: 100%; */
        max-width: 950px;
        margin: 20px auto;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-items: space-evenly;
        padding: 10px;
        box-shadow: 0px 1px 6px -2px grey;
        border: 2px solid gray;
    `;
	return (
		<Container>
	
			{characters.map((character, index) => {
				return <CharacterCard key={index} character={character} />
			})}
		</Container>
	)
}

export default CharacterList;