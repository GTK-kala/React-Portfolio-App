import { Route, Routes } from "react-router-dom";
import HomePage from "./Page/Home/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import AboutPage from "./Page/About/AboutPage";
import Project from "./Page/Projects/Project";
import ContactPage from "./Page/Contact/ContactPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
