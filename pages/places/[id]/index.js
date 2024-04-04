import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const StyledArticle = styled.article`
  margin: 1rem;
  padding: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: lightcoral;
  }
`;

export default function DetailPage({ places }) {
  const router = useRouter();
  const { id } = router.query;
  if (!id) return;
  const place = places.find((place) => place.id === id);
  const { name, location, image, mapURL, description } = place;
  return (
    <StyledArticle>
      <h1> {name}</h1>
      <p>{location}</p>
      <Image src={image} width={500} height={600} alt={name} />
      <br />
      <StyledLink href={mapURL}>Show {name} on google maps</StyledLink>

      <p>{description}</p>
      <StyledLink href="/">Back to list</StyledLink>
    </StyledArticle>
  );
}
