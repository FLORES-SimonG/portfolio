import { redirect } from "next/navigation";

// Server-side redirect: always send root requests to /de
export default function RootRedirectPage() {
  redirect("/de");
}
