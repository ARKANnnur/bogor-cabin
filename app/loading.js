import Spinner from '@/app/_components/Spinner';

function loading() {
  return (
    <div className='fixed top-1/2 right-1/2'>
      <Spinner />
    </div>
  );
}

export default loading;
