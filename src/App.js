

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
         <Route path='/' exact ={true} element={<Home />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
