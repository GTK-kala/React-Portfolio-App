import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
