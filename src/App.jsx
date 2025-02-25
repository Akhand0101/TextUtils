import { useState } from 'react'
import './App.css'
// import "bootstrap/dist/css/bootstrap.css"
// import "bootstrap/dist/js/bootstrap.bundle"
import Navbar from './components/navbar'
import TextForm from './components/TextForm'
import About from './components/about'
import Alert from "./components/Alert";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  // const [count, setCount] = useState(0)
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1200);
  }

const [mode,setMode]=useState('light')
const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#343a40'
    showAlert("Dark mode enabled","success")
    document.title="TextUtils-Dark Mode"
    }  else{

      setMode('light')
       document.body.style.backgroundColor='white'
       showAlert("Light mode enabled","success")
        document.title="TextUtils-Light Mode"
    }

}

  return (<>
        <BrowserRouter>
          <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert}/>
<Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          
          < Route exact path="/"
            element= {<TextForm showAlert={showAlert} heading="Enter the text to analyse: " mode={mode}/>} /> 
          </Routes>
          </BrowserRouter>
    
  <div className="container">

  {/* <TextForm showAlert={showAlert} heading="Enter The Text to Analyze" mode={mode}/>
    <About/> */}
  
  </div>
      </> 
  )
}

export default App
