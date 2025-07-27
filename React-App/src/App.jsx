import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import NavBar from "./Components/NavBar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
