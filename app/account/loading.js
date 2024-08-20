import Spinner from '@/app/_components/Spinner';

function loading() {
  return (
    <div className="flex justify-center items-center h-full">
      <Spinner />
    </div>
  );
}

export default loading;
