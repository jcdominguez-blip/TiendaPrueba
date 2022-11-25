
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { Categorias } from "./pages/Categorias";


function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>

        <Route path={"/"} element={<Home/>} />
        <Route path={"/categorias/:categoriasId"} element={<Categorias/>} />

      </Routes>
    </BrowserRouter>
</div>
  );
}

export default App;
