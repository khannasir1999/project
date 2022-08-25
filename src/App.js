
import { Route ,Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import FrontScreen from './pages/FrontScreen';
import {useSelector} from "react-redux";
import { selectUser } from './features/userSlice';
import ImageSlider from "./components/ImageSlide";
import { SliderData } from './components/SliderData';

function App() {
  const user = useSelector(selectUser);
  return (
 <>

 <div>
  {user ? <Dashboard/> : <FrontScreen/> }
 </div>
 
 
  </>
  //  <Routes>
  //   <Route path='/' index element= {<FrontScreen/>} />
  //   <Route path = "/Dashboard" element={<Dashboard/>}/>
  //  </Routes>
   

  );
}

export default App;
