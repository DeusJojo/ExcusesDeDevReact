import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Error404 from "./pages/Error404";
import HttpCode from "./pages/HttpCode";
import Lost from "./pages/lost/Lost";

// page des routes
function App() {
  // affichage (render)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lost" element={<Lost />} />
          <Route path="/$http_code/:code" element={<HttpCode />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
