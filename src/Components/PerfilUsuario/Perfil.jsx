import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importar useParams
import style from "./Perfil.module.css";
import { BsFillPersonLinesFill, BsFillCaretDownFill, BsGeoAltFill, BsFillPenFill, BsPersonFill, BsArrowRightCircleFill  } from "react-icons/bs";
import Logo from "../../imagens/logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";

function Perfil() {
  const { salaoId } = useParams(); // Obter o ID do salão da URL
  const [salao, setSalao] = useState(null); // Estado para armazenar as informações do salão

  useEffect(() => {
    const fetchSalaoData = async () => {
      try {
        const response = await axios.get(`https://localhost:7032/api/Salao/Perfil/${salaoId}`); // Usar o ID do salão na URL
        setSalao(response.data);
      } catch (error) {
        console.error("Erro ao buscar os dados do salão:", error);
      }
    };

    fetchSalaoData();
  }, [salaoId]); // Dependência do ID do salão

  if (!salao) {
    return <div>Carregando...</div>; // Exibe um carregamento enquanto os dados não chegam
  }

  return (
    <div className={style.pao}>
      <div className={style.main}>
        <div className={style.HeaderUser}>
          <div className={style.logoUser}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className={style.boxSairConta}>
            <Link to='/'>
              <button>
                {" "}
                Sair Conta <BsArrowRightCircleFill />
              </button>
            </Link>
          </div>
        </div>

        <div className={style.BoxPerfil}>
          <div className={style.dadosSalao}>
            <div className={style.fotoNome}>
              <div className={style.boxalluserf}>
                <div className={style.boxBranco}>
                  <div className={style.boxRosa}>
                    <BsPersonFill />
                  </div>
                </div>
              </div>

              <div className={style.NomeSalao}>
                <p className={style.nome1}>{salao.nomeSalao}</p> {/* Nome do salão */}
                <p className={style.nome2}>{salao.email}</p> {/* E-mail */}
              </div>
            </div>

            <div className={style.boxdadosPrincipais}>
              {/* _______________________1 dados______________________________ */}
              <details className={style.details1}>
                <summary className={style.summmary1}>
                  <div className={style.icon1}>
                    <BsFillPersonLinesFill />
                  </div>
                  <div className={style.textdados}>
                    <h6>Meus dados</h6>
                    <p>Valide seus dados</p>
                  </div>
                  <div className={style.setabaixo1}>
                    <BsFillCaretDownFill />
                  </div>
                </summary>
                <div className={style.miniBoxDados}>
                  <h5>{salao.nomeSalao}</h5>
                  <div className={style.boxNomeExibido}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.name}>Nome salão</p>
                      <p className={style.minidetalhe}>{salao.nomeSalao}</p>
                    </div>
                  </div>
                  <div className={style.boxNomeUsuario}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.nameUsuario}>Nome contratante</p>
                      <p className={style.minidetalhe}>{salao.nomeContratante}</p>
                    </div>
                  </div>
                  <div className={style.boxEmail}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.emailDados}>E-mail</p>
                      <p className={style.minidetalhe}>{salao.email}</p>
                    </div>
                  </div>
                  <div className={style.boxsenhaInf}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.senhaD}>Senha</p>
                      <p className={style.minidetalhe}>*********</p>
                    </div>
                  </div>
                  <div className={style.boxsenhaInf}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.senhaD}>Telefone</p>
                      <p className={style.minidetalhe}>Telefone: {salao.telefone}</p>
                    </div>
                  </div>

                  <div className={style.buttonATVDTV}>
                    <Link to="/Home"><button className={style.Desativar}>Desativar conta</button></Link>
                    <Link to="/Home"><button className={style.Excluir}>Excluir conta</button></Link>
                  </div>
                </div>
              </details>

              {/* _______________________2 Endereço______________________________ */}
              <details className={style.details1}>
                <summary className={style.summmary1}>
                  <div className={style.icon1}>
                    <BsGeoAltFill />
                  </div>
                  <div className={style.textdados}>
                    <h6>Endereço</h6>
                    <p>Endereço do salão</p>
                  </div>
                  <div className={style.setabaixo2}>
                    <BsFillCaretDownFill />
                  </div>
                </summary>
                <div className={style.miniBoxDados}>
                  <h5>{salao.nomeSalao}</h5>
                  <div className={style.boxendereco1}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.name}>Endereço 1</p>
                      <p className={style.minidetalhe}>{salao.endereco}</p> {/* Endereço do salão */}
                    </div>
                  </div>
                </div>
              </details>

              {/* _______________________3 Assinatura______________________________ */}
              <details className={style.details1}>
                <summary className={style.summmary1}>
                  <div className={style.icon1}>
                    <BsFillPenFill />
                  </div>
                  <div className={style.textdados}>
                    <h6>Plano de assinatura</h6>
                    <p>Gerencie suas assinaturas</p>
                  </div>
                  <div className={style.setabaixo3}>
                    <BsFillCaretDownFill />
                  </div>
                </summary>
                <div className={style.miniBoxDados}>
                  <h5>{salao.nomeSalao}</h5>
                  <div className={style.boxplanoBronza}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.PlanoBronze}>Plano bronze</p>
                      <p className={style.minidetalhe}>
                        {salao.planoBronze ? "Ativo" : "Você ainda não possui o plano bronze"}
                      </p>
                    </div>
                  </div>
                  <div className={style.boxplanoPrata}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.PlanoPrata}>Plano prata</p>
                      <p className={style.minidetalhe}>
                        {salao.planoPrata ? "Ativo" : "Você ainda não possui o plano prata"}
                      </p>
                    </div>
                  </div>
                  <div className={style.boxplanoOuro}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.PlanoOuro}>Plano ouro</p>
                      <p className={style.minidetalhe}>
                        {salao.planoOuro ? "Ativo" : "Você ainda não possui o plano ouro"}
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
