import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './Pages/Card';
import Generate from './Pages/Generate';
import QR from './Pages/QR';

function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<Generate />}/>
    <Route path="/:id/QR" element={<QR />}/>
    <Route path="/:id" element={<Card />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
