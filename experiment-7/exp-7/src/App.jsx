import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

       <div className="container">
      <div className="list-container">
        <h1 className="title">Student Information</h1>
        
        <Student 
          name="Rahul Sharma" 
          course="Computer Science" 
          marks="85" 
        />
        
        <Student 
          name="Anita Verma" 
          course="Information Technology" 
          marks="92" 
        />
        
        <Student 
          name="Rohan Gupta" 
          course="Electronics" 
          marks="78" 
        />
      </div>
    </div>
  
  )
}

export default App
