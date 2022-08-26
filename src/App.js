
import { Route ,Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import FrontScreen from './pages/FrontScreen';
import {useSelector} from "react-redux";
import { selectUser } from './features/userSlice';


function App() {
  const user = useSelector(selectUser);
  return (
 <>

 <div>
  {user ? <Dashboard/> : <FrontScreen/> }
 </div>
 
 
  </>

   

  );
}

export default App;
