import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategorias";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import ListarCategorias from "./components/categorias/listacategorias/ListarCategorias";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ListarProdutos from "./components/produtos/listaprodutos/ListaProdutos";
import FormProduto from "./components/produtos/formprodutos/FormProdutos";
import DeletarProduto from "./components/produtos/deletarprodutos/DeletarProdutos";


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='bg-gray-200 min-h-[68vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListarProdutos />} />
            <Route path="/cadproduto" element={<FormProduto />} />
            <Route path="/editarproduto/:id" element={<FormProduto />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
