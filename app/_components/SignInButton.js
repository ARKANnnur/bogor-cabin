import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 rounded-xl border border-secondary-50 bg-dark-50 px-10 py-4 text-lg font-medium transition-all duration-300 hover:bg-dark-100 hover:text-secondary-100">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span className="text-secondary-200">Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
