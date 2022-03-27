import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Characters from './components/Characters';
import Episodes from './components/Episodes';
import Searcher from './components/Searcher';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/searcher" element={<Searcher />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
