
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import './App.css';
import FrontScreen from './pages/FrontScreen';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' index element= {<FrontScreen/>} />
   </Routes>
   </BrowserRouter>

  );
}

export default App;
