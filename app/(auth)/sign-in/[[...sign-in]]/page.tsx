import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div>
        <Image
          src="/login.png"
          alt="login"
          width={300}
          height={700}
          className="w-full"
        />
      </div>
      <div className="flex justify-center items-center mb-20">
        <SignIn />
      </div>
    </div>
  );
}
