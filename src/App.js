import HomeScreen from './screen/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import  Navbar  from "./components/Navbar";

function App() {
  return (
    <Router className='App'>
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        {/* <Route path='/about' element={<AboutScreen />} />
        <Route path='/contattaci' element={<ContactScreen />} />
        <Route path='/cocktail/:id' element={<SingleCocktailScreen />} />
        <Route path='*' element={<ErrorScreen />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
