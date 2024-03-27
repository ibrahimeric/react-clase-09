import { useState } from 'react'
import './App.css'
import { Button } from 'react-bootstrap';
import { Navbar } from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
      <Button as="input" type="button" value="Input" />{' '}
      <Button as="input" type="submit" value="Submit" />{' '}
      <Button as="input" type="reset" value="Reset" />
    </>
  )
}

export default App
