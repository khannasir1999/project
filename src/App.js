
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import FrontScreen from './pages/FrontScreen';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' index element= {<FrontScreen/>} />
    <Route path = "/Dashboard" element={<Dashboard/>}/>
   </Routes>
   </BrowserRouter>

  );
}

export default App;
