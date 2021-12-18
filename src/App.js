
import './App.css';
import MainRouter from './Components/MainRouter'
import { useSelector } from 'react-redux'


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
