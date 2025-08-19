import { auth } from "@/app/_lib/auth";
import RolePage from "./_components/RolePage";
import SignIn from "./_components/SignIn";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return <SignIn />;
  }

  return <RolePage />;
}
