import Form from "@/components/Form";
import Link from "next/link";
export default function CreatePage({ handleAddPlace }) {
  return (
    <>
      <Form formName="Add new place" handlePlace={handleAddPlace} />
      <Link href="/">Back to main</Link>
    </>
  );
}
