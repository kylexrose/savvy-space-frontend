
import './App.css';
import MainRouter from './Components/MainRouter'
import { useSelector } from 'react-redux'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Login from './Components/Login'


function App() {
  const reduxState = useSelector(state => state);

window.localStorage.setItem('applicationState', JSON.stringify(reduxState))

  return (

    <div>
      <MainRouter/>
    </div>
    // <Router>
    //     <Header/>
    //       <Routes>
    //         {/* <Route path = "/login" element={<Login/>}/> */}
    //         <Route element = {<MainRouter/>} />
    //       </Routes>
    //   </Router>
      
      );
    }
    
    export default App;
