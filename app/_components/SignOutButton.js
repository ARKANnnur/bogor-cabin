import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="text-secondary-20 flex w-full items-center gap-4 px-5 py-3 font-semibold rounded-full text-secondary-200 transition-colors hover:rounded-full hover:bg-dark-50 hover:bg-opacity-50 hover:text-secondary-100">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-secondary-50" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
