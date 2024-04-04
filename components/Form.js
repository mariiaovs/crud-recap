import { useRouter } from "next/router";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem;
  padding: 2rem;
`;
const StyledButton = styled.button`
  width: 5rem;
  padding: 0.5rem;
`;
export default function Form({ id, handlePlace, defaultData, formName }) {
  const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    handlePlace(data, id);
    router.push("/");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>{formName}</h2>
      <label htmlFor="name">
        Name:{" "}
        <input
          name="name"
          id="name"
          defaultValue={defaultData?.name}
          required
        ></input>
      </label>
      <label htmlFor="location">
        Location:{" "}
        <input
          name="location"
          id="location"
          defaultValue={defaultData?.location}
        ></input>
      </label>
      <label htmlFor="mapURL">
        Map URL:{" "}
        <input
          name="mapURL"
          id="mapURL"
          defaultValue={defaultData?.mapURL}
        ></input>
      </label>
      <label htmlFor="image">
        Image URL:{" "}
        <input
          name="image"
          id="image"
          defaultValue={defaultData?.image}
        ></input>
      </label>
      <label htmlFor="description">
        Description:{" "}
        <input
          name="description"
          id="description"
          defaultValue={defaultData?.description}
        ></input>
      </label>
      <StyledButton>Submit</StyledButton>
    </StyledForm>
  );
}
