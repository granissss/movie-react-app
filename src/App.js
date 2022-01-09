import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Movieinfo from './pages/MovieInfo';
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movies/:id" element={<Movieinfo />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
