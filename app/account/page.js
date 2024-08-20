import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};

async function page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);

  return (
    <div className="h-full w-full items-center justify-center">
      <h2 className="mb-7 text-center text-4xl font-semibold text-secondary-50 underline underline-offset-8">
        Welcome, {firstName}
      </h2>
    </div>
  );
}

export default page;
