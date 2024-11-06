import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Cadastro from './Pages/Cadastro/Cadastro';
import SobreNos from './Pages/SobreNos/SobreNos';
import Blog from './Pages/Blog/Blog';
import FaleConosco from './Pages/FaleConosco/FaleConosco';
import Saloes from './Pages/Saloes/Saloes';
import Perfil from './Components/PerfilUsuario/Perfil';
import Header from './Components/Header/Header';
import { AuthProvider } from './context/AuthContext';

function App() {
  const location = useLocation();
  const hideHeaderRoutes = ["/Login", "/Perfil"];

  return (
    <AuthProvider>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/SobreNos" element={<SobreNos />} />
        <Route path="/Saloes" element={<Saloes />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/FaleConosco" element={<FaleConosco />} />
        <Route path="/Perfil/:salaoId" element={<Perfil />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
