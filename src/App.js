import './App.css';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
        <Nav/>
        <Routes>
         <Route exec path="/" element={<Home />} />
         <Route exec path="/banner" element={<Banner />} />
         <Route exec path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
