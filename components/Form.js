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
export default function Form({ handleAddPlace }) {
  const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    handleAddPlace(data);
    event.target.reset();
    event.target.name.focus();
    router.push("/");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Add new place</h2>
      <label htmlFor="name">
        Name: <input name="name" id="name" required></input>
      </label>
      <label htmlFor="location">
        Location: <input name="location" id="location"></input>
      </label>
      <label htmlFor="mapURL">
        Map URL: <input name="mapURL" id="mapURL"></input>
      </label>
      <label htmlFor="image">
        Image URL: <input name="image" id="image"></input>
      </label>
      <label htmlFor="description">
        Description: <input name="description" id="description"></input>
      </label>
      <StyledButton>Submit</StyledButton>
    </StyledForm>
  );
}
