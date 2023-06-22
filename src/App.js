import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TectForm';
import About from './components/About';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
  
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    },3000)
  }

  const toggleMode =() => {
    if(mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = '#212529';
      showAlert(' Dark Mode Enabled',"success");
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Enabled',"success")
    }
  }
  return (
  <>
    <Navbar title="TextUtils" mode={mode} togglemode = {toggleMode} />
    <Alert alert= {alert}/>
    <About />
      <TextForm heading="Text Analyzer" showAlert={showAlert} mode={mode}/>
  </>
  );
}

export default App;
