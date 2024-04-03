import Image from "next/image";

export default function PlaceCard({ image, name, location }) {
  return (
    <section>
      <h2>{name}</h2>
      <Image src={image} width={500} height={600} alt={name} />
      <p>{location}</p>
    </section>
  );
}
