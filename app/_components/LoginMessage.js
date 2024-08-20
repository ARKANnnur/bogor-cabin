function LoginMessage() {
  return (
    <div className="relative grid h-[100] w-full bg-dark-100 sm:w-1/2">
      <p className="self-center py-12 text-center text-xl">
        Please{" "}
        <a href="/login" className="text-accent-500 underline">
          login
        </a>{" "}
        to reserve this
        <br /> cabin right now
      </p>
    </div>
  );
}

export default LoginMessage;
