import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Collections from "./pages/Collections";
import Category from "./pages/Category";
import Singleproduct from "./pages/Singleproduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/category/:category" element={<Category/>} />
        <Route path="/singleproduct/:id" element={<Singleproduct/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
