import spinner from './assets/spinner.gif';

function Spinner() {
  return (
    <div className='w-100 mt20'>
      <img
        width={180}
        className='text-cente mx-auto'
        src={spinner}
        alt='Loading...'
      />
    </div>
  );
}
export default Spinner;
