import React from 'react'
import Greeting from './components/Greeting'
import Members from './components/Members'

const App = () => {
  let name = "Thomas"
  return (
    <>
      {/* <Greeting name={name} /> */}
      <Members />
    </>

  )
}

export default App
