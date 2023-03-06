import React from 'react'
// import Login from './components/Login'
// import From1 from './components/From1'
import { ChakraProvider } from '@chakra-ui/react';
import LoginPage from './components/LoginPage'
const App = () => {
  return (
    <div>
        {/* <Login/>
        <From1/> */}
   
      
 
      <ChakraProvider>
      <LoginPage/>
      </ChakraProvider>
   
 
  
    </div>
  )
}

export default App