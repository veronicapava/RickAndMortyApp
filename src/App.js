import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import Header from './components/Header';
import Characters from './components/Characters';
import Episodes from './components/Episodes';
import Searcher from './components/Searcher';
import Favorites from './components/Favorites';


function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter basename={"/RickAndMortyApp/"}>
          <Header />
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/searcher" element={<Searcher />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
