import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";
import SkillsScreen from "./screen/SkillsScreen";
import ProjectsScreen from "./screen/ProjectsScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/skills" element={<SkillsScreen />} />
        <Route path="/projects" element={<ProjectsScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
