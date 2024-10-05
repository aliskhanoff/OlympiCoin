import { IconButton } from '@olympicoin/shared'
import { AiFillWallet } from 'react-icons/ai'

export const App = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col items-start justify-start p-10 gap-5 bg-orange-50'>
        <IconButton icon={ <AiFillWallet /> } >
          Connect
        </IconButton>
    </div>
  );
}

export default App;
