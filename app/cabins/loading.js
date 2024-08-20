import Spinner from '@/app/_components/Spinner';

function loading() {
  return (
    <div className="flex justify-center items-center flex-col w-dvw h-dvh">
      <Spinner />
      <p className="text-xl text-primary-200">Loading Cabins Data...</p>
    </div>
  );
}

export default loading;
