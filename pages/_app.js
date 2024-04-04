import { useState } from "react";
import GlobalStyle from "../styles";
import { initialPlaces } from "@/lib/db";
import { uid } from "uid";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [places, setPlaces] = useState(initialPlaces);
  function handleAddPlace(formData) {
    const newPlace = {
      id: uid(),
      name: formData.name,
      location: formData.location,
      image: formData.image,
      mapURL: formData.mapURL,
      description: formData.description,
    };
    setPlaces([...places, newPlace]);
  }

  function handleDeletePlace(id) {
    setPlaces(places.filter((place) => place.id !== id));
    router.push("/");
  }

  function handleEditPlace(formData, id) {
    console.log("handleEditPlace", formData);
    setPlaces(
      places.map((place) => {
        if (place.id === id)
          return {
            id: place.id,
            name: formData.name,
            location: formData.location,
            image: formData.image,
            mapURL: formData.mapURL,
            description: formData.description,
          };
        else return place;
      })
    );
    console.log(places);
  }
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        places={places}
        handleAddPlace={handleAddPlace}
        handleDeletePlace={handleDeletePlace}
        handleEditPlace={handleEditPlace}
      />
    </>
  );
}
