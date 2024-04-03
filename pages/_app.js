import { useId, useState } from "react";
import GlobalStyle from "../styles";
import { initialPlaces } from "@/lib/db";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
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
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        places={places}
        handleAddPlace={handleAddPlace}
      />
    </>
  );
}
