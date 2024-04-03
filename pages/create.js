import Form from "@/components/Form";
import Link from "next/link";
export default function CreatePage({ handleAddPlace }) {
  return (
    <>
      <Form handleAddPlace={handleAddPlace} />
      <Link href="/">Back to main</Link>
    </>
  );
}
