import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const StyledArticle = styled.article`
  margin: 1rem;
  padding: 2rem;
`;
const StyledButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  margin: 1rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 0.2rem;
  &:hover {
    background-color: lightcoral;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  border: 1px solid black;
  color: black;
  margin: 0.5rem;
  border-radius: 0.2rem;
  padding: 0.5rem;
  &:hover {
    color: lightcoral;
  }
`;

export default function DetailPage({ places, handleDeletePlace }) {
  const router = useRouter();
  const { id } = router.query;
  if (!id) return;
  const place = places.find((place) => place.id === id);
  if (!place) return;
  const { name, location, image, mapURL, description } = place;
  return (
    <StyledArticle>
      <StyledLink href="/">← Back to List</StyledLink>
      <h1> {name}</h1>
      <p>{location}</p>
      <Image src={image} width={500} height={600} alt={name} />
      <br />
      <br />

      <StyledLink $googlelink href={mapURL}>
        Show {name} on google maps
      </StyledLink>

      <p>{description}</p>
      <StyledLink href={`/places/${id}/edit`}>✍️</StyledLink>
      <StyledButton onClick={() => handleDeletePlace(id)}>🗑️</StyledButton>

      <br />
      <StyledLink href="/">← Back to List</StyledLink>
    </StyledArticle>
  );
}
