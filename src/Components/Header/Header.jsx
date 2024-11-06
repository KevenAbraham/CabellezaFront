import React, { useState, useContext } from 'react';
import style from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../imagens/logo.svg';
import { AuthContext } from '../../context/AuthContext';

function Header() {
    const { isAuthenticated, userData, logout } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        logout();
        setDropdownOpen(false);
        navigate('/Login');
    };

    const goToProfile = () => {
        navigate(`/Perfil/${userData?.salaoId}`);
        setDropdownOpen(false);
    };

    console.log("isAuthenticated:", isAuthenticated);
    console.log("userData:", userData);

    return (
        <header className={style.header}>
            <Link to="/">
                <img src={Logo} alt="Logo Cabelleza" className={style.Logo} />
            </Link>
            <nav className={style.nav_principal}>
                <ul>
                    <Link to="/" >
                        <li>Home</li>
                    </Link>
                    <Link to="/SobreNos">
                        <li>Sobre Nós</li>
                    </Link>
                    <Link to="/Saloes">
                        <li>Salões</li>
                    </Link>
                    <Link to="/Blog">
                        <li>Blog</li>
                    </Link>
                    <Link to="/FaleConosco">
                        <li>Fale Conosco</li>
                    </Link>
                </ul>

                {isAuthenticated ? (
                    <div className={style.userProfile} onClick={toggleDropdown}>
                        <div className={style.profileIconContainer}>
                            <img
                                src={`data:image/jpeg;base64,${userData.imagem}`}
                                alt="Imagem do salão"
                                className={style.profileImage}
                            />
                        </div>
                        <div className={style.profileName}>
                            {userData.nomeSalao || 'Usuário'}
                        </div>

                        {dropdownOpen && (
                            <div className={style.dropdownMenu}>
                                <button onClick={goToProfile}>Perfil</button>
                                <button onClick={handleLogout}>Sair</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/Login">
                        <button>Login</button>
                    </Link>
                )}
            </nav>
        </header>
    );
}

export default Header;
