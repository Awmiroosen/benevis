import { userSignIn } from "@/actions/user/auth";

import Button from "@/components/ui/Button";
import { LogIn } from "lucide-react";


const Login = () => {
  return (
    <section className="w-full h-svh flex justify-center items-center flex-col">
      <h3 className="text-xl">ثبت نام و ورود</h3>
      <form action={userSignIn}>
        <Button type="submit" className="my-4" variant="primary">
          <LogIn size={17} className="mx-1" />
          ورود با گوگل
        </Button>
      </form>
    </section>
  );
};

export default Login;
