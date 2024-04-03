import PlaceCard from "@/components/PlaceCard";
import Link from "next/link";
import styled from "styled-components";

const StyledList = styled.ul`
  position: relative;
`;
const StyledLink = styled(Link)`
  position: fixed;
  bottom: 5rem;
  right: 18rem;
  z-index: 1;
  color: black;
  background-color: lightcoral;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 1rem;
  text-decoration: none;
`;

export default function HomePage({ places }) {
  return (
    <>
      <StyledList>
        {places.map((place) => (
          <li key={place.id}>
            <PlaceCard
              image={place.image}
              name={place.name}
              location={place.location}
            />
          </li>
        ))}
        <StyledLink href="/create">Add new place</StyledLink>
      </StyledList>
    </>
  );
}
