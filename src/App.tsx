import { Converter } from './components';
import Loader from './components/Loader';

function App() {
  return (
    <div className='flex flex-col items-center h-screen bg-neutral-50'>
      <header className='h-24 mb-12 fixed'></header>
      <main className='absolute top-1/2 -translate-y-full flex flex-col justify-center md:flex-row md:justify-around max-w-xs md:max-w-2xl w-full'>
        <Converter />
      </main>
      <Loader />
      <footer className='fixed flex items-center bottom-0 h-24 text-sm md:text-xs font-mono'>
        Made with 💜 by&nbsp;
        <a
          href='https://altsep.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          us
        </a>
      </footer>
    </div>
  );
}

export default App;
