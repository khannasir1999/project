
import { Route ,Routes ,BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import FrontScreen from './pages/FrontScreen';
// import {useSelector} from "react-redux";
// import { selectUser } from './features/userSlice';
import SignupModal from './components/SignupModal';


function App() {
  //const user = useSelector(selectUser);
  return (
 <>
 <BrowserRouter>
<Routes>
  <Route path='/' element ={<FrontScreen/>}/>
  <Route path = "/SignupModal" element = {<SignupModal/>}/>
  <Route path = "/Dashboard" element = {<Dashboard/>} />
</Routes>
</BrowserRouter>
 {/* <div>
  {user ? <Dashboard/> : <FrontScreen/> }
 </div> */}
 
 
  </>

   

  );
}

export default App;
