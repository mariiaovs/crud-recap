import PlaceCard from "@/components/PlaceCard";
import Link from "next/link";
import styled from "styled-components";

const StyledList = styled.ul`
  position: relative;
  list-style: none;
`;
const StyledLink = styled(Link)`
  color: black;

  text-decoration: none;
  &:hover {
    color: lightcoral;
  }
`;

const StyledAddLink = styled(StyledLink)`
  position: fixed;
  bottom: 5rem;
  right: 18rem;
  z-index: 1;
  background-color: lightcoral;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 1rem;
  &:hover {
    color: white;
  }
`;

export default function HomePage({ places }) {
  return (
    <>
      <StyledList>
        {places.map((place) => (
          <li key={place.id}>
            <StyledLink href={`/places/${place.id}`}>
              <PlaceCard
                image={place.image}
                name={place.name}
                location={place.location}
              />
            </StyledLink>
          </li>
        ))}
        <StyledAddLink href="/create">Add new place</StyledAddLink>
      </StyledList>
    </>
  );
}
