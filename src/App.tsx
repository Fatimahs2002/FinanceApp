import './App.css';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import SendMony from './components/SendMony';
import ReceiveMony from './components/ReceiveMony';
import Logs from './components/Logs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send" element={<SendMony />} />
        <Route path="/receive" element={<ReceiveMony />} />
        <Route path="/logs" element={<Logs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

