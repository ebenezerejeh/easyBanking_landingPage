import { useState } from 'react'
import Header from './Header'
import Section from './Section'
import Footer from './Footer'


function App() {
  const [toggle, setToggle] = useState(false)


  const openSidebar = ()=>{
    setToggle(true);
  }

  const closeSidebar = ()=>{
    setToggle(false);
  }

  return (
    <>

      <div className="container">
        <Header openSidebar={openSidebar} closeSidebar={closeSidebar} toggle={toggle}/> 

        <Section/> 

        <Footer/>       

        </div>



          
    
    
    </>
  )
}

export default App
