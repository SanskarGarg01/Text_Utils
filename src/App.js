import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from 'react-router-dom';

// Here we are using React Router so that our web page does not get reloaded again and again while switching the tab like Home,About.
// For react router we first install react-router-dom with the following command      npm install react-router-dom.Earlier we uses Switches in react-router-dom but now Switches has been replaced from Routes.

function App() {

  const [mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
// setTimeout function is used to perform task after a particular interval of time.Here we are setting alert to null after 1.5 seconds so that it get removed itself after showing the message after 1.5 seconds.
 
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode=== 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been Enabled","success");
    }
    else{ 
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode has been Enabled","success");
    }
  }
  return (
    // 
    <>
    <Router>
   {/*Passing the Props  Eg title="TextUtils"*/}
   <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>  
   <Alert alert={alert}/>
   <div className="container my-3">
   <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
          <Route  exact path="about" element={<About mode={mode}/>} />
{/* Using exact path is best practice instead of using path bcz in exact path react will be exactly matching the path and then will give the results. */}
        </Routes>
   </div>
   </Router>

   </>
  );
}

export default App;
