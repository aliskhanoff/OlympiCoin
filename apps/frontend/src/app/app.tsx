import { IconicInput } from '@olympicoin/shared'
import { AiFillAccountBook, AiFillWallet } from 'react-icons/ai'

export const App = () => {
  return (
    <div className='w-full h-80 flex flex-col items-start justify-start p-10 gap-5'>
        <IconicInput rounded sizeVariant='sm' iconLeft={ <AiFillWallet /> } placeholder='Hello world' styleVariant='primary' />
        <IconicInput rounded sizeVariant='md' iconLeft={ <AiFillAccountBook /> } placeholder='Hello world' styleVariant='danger' />
        <IconicInput rounded sizeVariant='lg' iconLeft={ <AiFillAccountBook /> } placeholder='Hello world' styleVariant='warning' />
        <IconicInput rounded sizeVariant='xl' iconLeft={ <AiFillAccountBook /> } placeholder='Hello world' styleVariant='info' />
    </div>
  );
}

export default App;
