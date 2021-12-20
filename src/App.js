import {useEffect} from 'react'
import './App.css';
import MainRouter from './Components/MainRouter'
import { useSelector, useDispatch } from 'react-redux'
import { saveNotesActionCreator } from './Redux/noteState';
import Axios from './Utils/Axios';

function App() {
  const reduxState = useSelector(state => state);
  window.localStorage.setItem('applicationState', JSON.stringify(reduxState))

  return (
    <div className="App">
        <MainRouter/>
    </div>
      );
    }
    
    export default App;
