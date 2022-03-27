import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Characters from './components/Characters';
import Episodes from './components/Episodes';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
