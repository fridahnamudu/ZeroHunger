import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
