import React from 'react';
import '../index.css';
import styled from "styled-components";

const CharacterCard = props => {
    const Pulse = styled.div`
  transition: transform 0.2s ease-in;
  background: black;
  width: 250px;
  height: 250px;
  cursor: pointer;
  box-shadow: 0px 1px 6px -2px grey;
  margin-top: 10px;

  &:hover {
    transform: translateY(-5px) scale(1.05);
  }
`;
const Name = styled.h2`
  font-size: 40px;
  color: purple;
  background: black;
`;
	return (
		<Pulse className="card-wrapper">
			<Name>{props.character.name}</Name>
		</Pulse>
	)
}

export default CharacterCard;