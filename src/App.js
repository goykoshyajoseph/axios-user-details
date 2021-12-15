import './App.css';
import Goykoshya from './Components/Goykoshya/Goykoshya';
import {BrowserRouter, Switch, Route } from  'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
  
         <Route path="/userdetails" component={Goykoshya} />
       
     </BrowserRouter>
    </>

  );
}

export default App;
