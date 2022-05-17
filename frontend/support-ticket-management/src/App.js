import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import TicketEntry from './components/TicketEntry';

function App(props) {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/ticket' element={<TicketEntry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
