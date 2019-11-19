import React from 'react'
import Greeting from './components/Greeting'
import Members from './components/Members'
import { Container } from 'semantic-ui-react'

const App = () => {
  let name = "Thomas"
  return (
    <Container>
      {/* <Greeting name={name} /> */}
      <Members />
    </Container>

  )
}

export default App
