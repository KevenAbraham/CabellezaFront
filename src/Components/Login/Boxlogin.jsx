import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import style from "./Boxlogin.module.css";
import toastr from 'toastr';
import { AuthContext } from '../../context/AuthContext'; // Importe o contexto de autenticação

function Boxlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Use o contexto de autenticação

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('https://localhost:7032/api/Salao/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                senha: password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            if (data.userData) {
                login(data.userData, rememberMe);
                navigate(`/Perfil/${data.userData.salaoId}`);
            } else {
                toastr.error('ID do salão não encontrado na resposta.');
            }
        } else {
            toastr.error(data.message || 'E-mail ou senha inválidos!');
        }
    } catch (error) {
        toastr.error('Erro ao fazer login. Por favor, tente novamente mais tarde.');
    }
};


  return (
    <div className={style.ye}>
      <main className={style.boxfunologin}>
        <section className={style.boxlogin}>
          <div className={style.boxdados}>
            <Link to="/">
              <button className={style.botaovoltar}>
                <BsArrowLeft />
              </button>
            </Link>
            <h3>Área de login</h3>
            <form onSubmit={handleSubmit}>
              <div className={style.boxemailSenha}>
                <input
                  className={style.input1}
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <input
                  className={style.input2}
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className={style.boxcheck}>
                <input
                  className={style.input3}
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <p>Lembre de mim</p>
              </div>
              <div className={style.botaoentrar}>
                <input className={style.entrar} type="submit" value="Entrar" />
                <p>Esqueceu a senha?</p>
                <div className={style.contentOrtext}>
                  <span></span>
                  <span>OU</span>
                  <span></span>
                </div>
              </div>
            </form>
            <div className={style.botaocadastro}>
              <p>Ainda não tem login?</p>
              <Link to="/Cadastro" className={style.link}>
                Cadastre-se aqui
              </Link>
            </div>
          </div>
          <div className={style.rodameio}></div>
          <div className={style.boximglogin}></div>
        </section>
      </main>
    </div>
  );
}

export default Boxlogin;
