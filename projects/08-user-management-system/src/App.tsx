import './App.css'
import { Card } from '@tremor/react';
import { ListOfUsers } from './components/ListOfUsers'
import { CreateNewUser } from './components/CreateNewUser';

function App() {

  return (
    <>
      <Card className='my-4'>
        <h2 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">⚛️ Redux Toolkit Sandbox</h2>
      </Card>
      <ListOfUsers />
      <CreateNewUser />
    </>
  )
}

export default App
