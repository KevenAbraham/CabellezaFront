import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom"; // Importar useParams
import style from "./Perfil.module.css";
import { BsFillPersonLinesFill, BsFillCaretDownFill, BsGeoAltFill, BsFillPenFill, BsPersonFill, BsArrowRightCircleFill } from "react-icons/bs";
import Logo from "../../imagens/logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";


function Perfil() {
  const { salaoId } = useParams(); // Obter o ID do salão da URL
  const [salao, setSalao] = useState(null); // Estado para armazenar as informações do salão
  const { updateUserData } = useContext(AuthContext);

  useEffect(() => {
    const fetchSalaoData = async () => {
      try {
        const response = await axios.get(`https://localhost:7032/api/Salao/Perfil/${salaoId}`);
        if (response.data) {
          setSalao(response.data);
          console.log("Dados do salão:", response.data);
        } else {
          console.error("Resposta vazia da API.");
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do salão:", error);
      }
    };
    

    fetchSalaoData();
  }, [salaoId, updateUserData]);

  useEffect(() => {
    console.log("Estado do salão atualizado:", salao);
  }, [salao]);

  if (!salao) {
    return <div>Carregando...</div>;
  }

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`https://localhost:7032/api/Salao/Atualizar/${salaoId}`, salao);
      console.log("Dados atualizados com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao atualizar os dados:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`https://localhost:7032/api/Salao/Excluir/${salaoId}`);
      console.log("Salão excluído com sucesso:", response);
      window.location.href = "/";
    } catch (error) {
      console.error("Erro ao excluir o salão:", error);
    }
  };


  return (
    <div className={style.pao}>
      <div className={style.main}>
        {/* <div className={style.HeaderUser}>
          <div className={style.logoUser}>
            <Link to='/'>
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className={style.boxSairConta}>
            <Link to='/'>
              <button>
                {" "}
                Sair da Conta &nbsp;&nbsp; <BsArrowRightCircleFill />
              </button>
            </Link>
          </div>
        </div> */}

        <div className={style.BoxPerfil}>
          <div className={style.dadosSalao}>
            <div className={style.fotoNome}>
              <div className={style.boxalluserf}>
                <div className={style.boxBranco}>
                  <div className={style.boxRosa}>
                    <img src={salao.imagemBase64} alt="Foto do usuário" className={style.imagemPerfil} />
                  </div>
                </div>
              </div>

              <div className={style.NomeSalao}>
                <p className={style.nome1}>{salao.nomeSalao}</p> {/* Nome do salão */}
                <p className={style.nome2}>{salao.emailSalao}</p> {/* E-mail */}
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
                  {/* <h5>{salao.nomeSalao}</h5> */}
                  <div className={style.boxNomeExibido}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.name}>Nome salão</p>
                      <input
                        className={style.minidetalhe}
                        value={salao.nomeSalao}
                        onChange={(e) => setSalao({ ...salao, nomeSalao: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className={style.boxNomeUsuario}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.nameUsuario}>Nome contratante</p>
                      <input
                        className={style.minidetalhe}
                        value={salao.nomeProprietario}
                        onChange={(e) => setSalao({ ...salao, nomeProprietario: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className={style.boxEmail}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.emailDados}>E-mail</p>
                      <input
                        className={style.minidetalhe}
                        value={salao.emailSalao}
                        onChange={(e) => setSalao({ ...salao, emailSalao: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className={style.boxsenhaInf}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.senhaD}>Telefone</p>
                      <input
                        className={style.minidetalhe}
                        value={salao.telefoneSalao}
                        onChange={(e) => setSalao({ ...salao, telefoneSalao: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className={style.boxsenhaInf}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.senhaD}>CNPJ</p>
                      <input
                        className={style.minidetalhe}
                        value={salao.cnpj}
                        onChange={(e) => setSalao({ ...salao, cnpj: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={style.buttonATVDTV}>
                    <button className={style.Excluir} onClick={handleDelete}>Excluir conta</button>
                    <button className={style.Salvar} onClick={handleUpdate}>Salvar Alterações</button>
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
                  <div className={style.boxendereco1}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.senhaD}>Endereço</p>
                      <input
                        className={style.minidetalhe}
                        value={salao.endereco}
                        onChange={(e) => setSalao({ ...salao, endereco: e.target.value })}
                      />
                    </div>
                    <div className={style.boxTextoinfo}>
                      <p className={style.senhaD}>Número</p>
                      <input
                        className={style.minidetalhe}
                        value={salao.numero}
                        onChange={(e) => setSalao({ ...salao, numero: e.target.value })}
                      />
                    </div>
                    <div className={style.boxTextoinfo}>
                      <p className={style.senhaD}>Bairro</p>
                      <input
                        className={style.minidetalhe}
                        value={salao.bairro}
                        onChange={(e) => setSalao({ ...salao, bairro: e.target.value })}
                      />
                    </div>
                    <div className={style.boxTextoinfo}>
                      <p className={style.senhaD}>Cidade</p>
                      <input
                        className={style.minidetalhe}
                        value={salao.cidade}
                        onChange={(e) => setSalao({ ...salao, cidade: e.target.value })}
                      />
                    </div>
                    <div className={style.boxTextoinfo}>
                      <p className={style.senhaD}>CEP</p>
                      <input
                        className={style.minidetalhe}
                        value={salao.cep}
                        onChange={(e) => setSalao({ ...salao, cep: e.target.value })}
                      />
                    </div>
                    <div className={style.boxTextoinfo}>
                      <p className={style.senhaD}>Complemento</p>
                      <input
                        className={style.minidetalhe}
                        value={salao.complemento}
                        onChange={(e) => setSalao({ ...salao, complemento: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className={style.buttonATVDTV}>
                    <button className={style.Salvar} onClick={handleUpdate}>Salvar Alterações</button>
                  </div>
                </div>
              </details>

              {/* _______________________3 Assinatura______________________________
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
              </details> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
