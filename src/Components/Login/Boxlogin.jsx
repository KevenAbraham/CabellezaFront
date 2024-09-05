import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import style from "./Boxlogin.module.css";
import toastr from 'toastr';

function Boxlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  {
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
            senha: password,  // Certifique-se de que 'password' é enviado como 'senha'
          }),
        });
    
        if (response.ok) {
          const data = await response.json();
          // Redireciona para a página de perfil usando o ID do salão retornado
          navigate(`/Usuario/${data.salaoId}`);
        } else {
          toastr.error('E-mail ou senha inválidos!');
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        toastr.error('Erro ao fazer login. Por favor, tente novamente mais tarde.');
      }
    };
    


    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleRememberMeChange = (e) => {
      setRememberMe(e.target.checked);
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
                <Link to="/Assinatura" className={style.link}>
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
}
export default Boxlogin;

