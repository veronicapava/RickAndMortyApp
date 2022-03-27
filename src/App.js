import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Episodes from './components/Episodes';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
