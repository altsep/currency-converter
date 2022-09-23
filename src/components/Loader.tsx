import { useAppSelector } from '../store/hooks';
import { RootState } from '../store';
function Loader() {
  const isLoading = useAppSelector(
    (state: RootState) => state.currencies.isLoading
  );
  return (
    <div
      className='absolute border-r-transparent animate-spin  w-8 h-8 border-4 rounded-full text-gray-300 border-indigo-300 self-center bottom-1/3'
      role='status'
      style={{ display: isLoading ? 'inline-block' : 'none' }}
    >
      <span className='invisible'>Loading...</span>
    </div>
  );
}

export default Loader;
