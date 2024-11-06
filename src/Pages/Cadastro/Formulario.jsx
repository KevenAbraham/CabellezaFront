import React, { useState } from 'react';
import style from './Formulario.module.css';
import { IMaskInput } from "react-imask";
import Logo from '../../imagens/logo.svg';
import { Link } from 'react-router-dom';

function Formulario({ eventoTeclado, cadastrar, obj, setImage }) {
  const [imagePreview, setImagePreview] = useState(null);
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [endImg] = useState("./ImgiconU.png");

  // Função para atualizar a visualização da imagem
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  // Validação para checar se as senhas coincidem
  const validarSenhas = () => {
    if (senha !== confirmaSenha) {
      alert("As senhas não coincidem!");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarSenhas()) {
      cadastrar();
    }
  };

  return (
    <main className={style.Mdados}>
      <div className={style.ReturnHome}>
        {/* <Link to="/">
          <img src={Logo} alt="Logo Cabelleza" className={style.Logo} />
        </Link> */}
      </div>

      <section className={style.containerSection}>
        <div className={style.caixaDados}>
          <form onSubmit={handleSubmit}>
            <h5 className={style.TpessoaF}>Dados cadastrais</h5>
            <div className={style.PrimeiroInputs}>
              <div className={style.divcpf}>
                <div className={style.nomef}>
                  <label className={style.label1} htmlFor="nomefantasia">Nome do Salão*</label>
                  <input type="text" name="nomeSalao" value={obj.nomeSalao} onChange={eventoTeclado} placeholder="Digite aqui o nome do salão..." required />
                </div>
                <div className={style.cnpjdiv}>
                  <label htmlFor="cnpj">CNPJ*</label>
                  <IMaskInput mask="00.000.000/0000-00" value={obj.cnpj} name="cnpj" onChange={eventoTeclado} placeholder="00.000.000/0000-00" required />
                </div>
                <div className={style.tele}>
                  <label htmlFor="telefone">Telefone Salão*</label>
                  <IMaskInput mask="(00) 00000-0000" value={obj.telefoneSalao} onChange={eventoTeclado} name="telefoneSalao" placeholder="Telefone salão" required />
                </div>
              </div>
            </div>
            <div className={style.SegundosInput}>
              <div className={style.divnomecrontato}>
                <label htmlFor="name">Nome contratante*</label>
                <input type="text" name="proprietarioSalao" value={obj.proprietarioSalao} onChange={eventoTeclado} placeholder="Digite aqui o nome do contratante..." required />
              </div>
              <div className={style.divemail}>
                <label htmlFor="e-mail">E-mail salão*</label>
                <input type="email" name="email" value={obj.email} onChange={eventoTeclado} placeholder="Digite aqui o e-mail do salão..." required />
              </div>
            </div>
            <div className={style.TerceiroInpust}>
              <div className={style.divsenha}>
                <label htmlFor="password">Senha*</label>
                <input type="password" name="senha" placeholder="Senha..." value={senha} onChange={(e) => setSenha(e.target.value)} required />
              </div>
              <div className={style.divconfirmasenha}>
                <label htmlFor="confirma password">Confirma senha*</label>
                <input type="password" name="confirmaSenha" placeholder="Confirme a senha aqui..." value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} required />
              </div>
            </div>
            <h5 className={style.Tpessoa}>Insira a imagem do seu salão</h5>
            <div className={style.boximgsalao}>
              <div className={style.imgdiv}>
                <input type="file" name="imagem" onChange={handleImageChange} />
                <br /> <br />
                <img src={imagePreview || endImg} alt="Imagem do salão" className={style.previewImg} />
                <br />
              </div>
            </div>
            <h5 className={style.enderecoT}>Endereço salão*</h5>
            <div className={style.boxprimeiroinputendereco}>
              <div className={style.boxcep}>
                <label htmlFor="cep">CEP*</label>
                <IMaskInput mask="00000-000" placeholder="Digite o CEP" name="cep" value={obj.cep} onChange={eventoTeclado} required />
              </div>
              <div className={style.boxcidade}>
                <label htmlFor="cidade">Cidade*</label>
                <input type="text" name="cidade" value={obj.cidade} onChange={eventoTeclado} placeholder="Digite aqui a cidade..." required />
              </div>
            </div>
            <div className={style.boxruaendereco}>
              <div className={style.divRua}>
                <label htmlFor="Rua">Endereço do salão*</label>
                <input type="text" name="enderecoSalao" placeholder="Endereço..." value={obj.enderecoSalao} onChange={eventoTeclado} required />
              </div>
              <div className={style.numerocasa}>
                <label htmlFor="numero casa">Número*</label>
                <IMaskInput mask="0000*" placeholder="Digite o Número" name="numeroSalao" value={obj.numeroSalao} onChange={eventoTeclado} required />
              </div>
              <div className={style.bairro}>
                <label htmlFor="Bairro">Bairro*</label>
                <input type="text" placeholder="Escreva aqui... " name="bairroSalao" value={obj.bairroSalao} onChange={eventoTeclado} required />
              </div>
              <div className={style.complemento}>
                <label htmlFor="Complemento casa">Complemento</label>
                <input type="text" placeholder="Escreva aqui... " name="complemento" value={obj.complemento} onChange={eventoTeclado} />
              </div>
            </div>
            <div>
              <button className={style.finalizar} type="submit">Finalizar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Formulario;
