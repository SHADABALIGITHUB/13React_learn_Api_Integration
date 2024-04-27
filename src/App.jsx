import { useState } from 'react'
import { Button } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='container m-2 p-2 border-2'>



       <Button variant='primary'> Login  </Button>

       </div>
     
    </>
  )
}

export default App
