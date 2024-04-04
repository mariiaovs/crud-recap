import { useRouter } from "next/router";
import Form from "@/components/Form";

export default function EditPlace({ places, handleEditPlace }) {
  const router = useRouter();
  const { id } = router.query;
  if (!id) return;
  const place = places.find((place) => place.id === id);
  if (!place) return;
  const { name, location, image, mapURL, description } = place;
  return (
    <Form
      formName="Edit place"
      id={id}
      handlePlace={handleEditPlace}
      defaultData={place}
    />
  );
}
