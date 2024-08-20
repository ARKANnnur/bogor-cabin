import SignInButton from '@/app/_components/SignInButton';
export const metadata = {
  title: 'Login',
};

export default function Page() {
  return (
    <div className="flex flex-col gap-5 justify-center w-dvw h-dvh items-center">
      <h2 className="text-3xl font-semibold text-secondary-50 text-center">
        Sign in to access your guest area
      </h2>

      <SignInButton />
    </div>
  );
}
