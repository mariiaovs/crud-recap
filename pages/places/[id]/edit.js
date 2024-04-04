import { useRouter } from "next/router";

export default function EditPlace() {
  const router = useRouter();
  const { id } = router.query;
}
