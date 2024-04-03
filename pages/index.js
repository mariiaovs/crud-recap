import PlaceCard from "@/components/PlaceCard";
import { initialPlaces } from "@/lib/db";
import { useState } from "react";

export default function HomePage() {
  const [places, setPlaces] = useState(initialPlaces);

  return (
    <ul>
      {places.map((place) => (
        <li key={place.id}>
          <PlaceCard
            image={place.image}
            name={place.name}
            location={place.location}
          />
        </li>
      ))}
    </ul>
  );
}
