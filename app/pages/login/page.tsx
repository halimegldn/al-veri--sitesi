import BlogPage from "@/app/blog/page";
import LoginPage from "@/components/pages/login/login";
import { getUsers } from "@/data/user";

export default async function Login() {
  const users = await getUsers();
  return (
    <div>
      <LoginPage users={users} />
    </div>
  )
}