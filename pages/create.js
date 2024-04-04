import Form from "@/components/Form";
import Link from "next/link";
export default function CreatePage({ handleAddPlace }) {
  return (
    <>
      <Form handlePlace={handleAddPlace} />
      <Link href="/">Back to main</Link>
    </>
  );
}
