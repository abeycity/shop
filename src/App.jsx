 import React from 'react'
 const Homepage = React.lazy(()=>import('./components/homepage/home')) 
function App() {

  return (
    <>
    <div>
      <div> <Homepage/> </div>
       
    </div>
    </>
  )
}

export default App
