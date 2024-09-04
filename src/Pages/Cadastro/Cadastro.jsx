import React, { useState } from 'react';
import axios from 'axios';
import Formulario from "./Formulario";
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [image, setImage] = useState(null);
  const [saloes, setSaloes] = useState([]);
  const [objSalao, setObjSalao] = useState({
    id: '795b125f-ffea-4f75-884e-dc9e39963384',
    nomeSalao: '',
    cnpj: '',
    telefoneSalao: '',
    proprietarioSalao: '',
    email: '',
    senha: '',
    imagem: '',
    cep: '',
    cidade: '',
    enderecoSalao: '',
    numeroSalao: '',
    bairroSalao: '',
    complemento: ''
  });

  console.log(objSalao);
  const navigate = useNavigate();

  // Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjSalao({ ...objSalao, [e.target.name]: e.target.value });
  };

  // Cadastrar salao
  const cadastrar = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    // Adicionando dados do formulário ao FormData
    for (const key in objSalao) {
      formData.append(key, objSalao[key]);
    }

    // Adicionando a imagem se estiver presente
    if (image) {
      formData.append('imagem', image);
    }

    const campoMapeamento = {
      NomeSalao: objSalao.nomeSalao || '',
      CNPJ: objSalao.cnpj || '',
      TelefoneSalao: objSalao.telefoneSalao || '',
      NomeProprietario: objSalao.proprietarioSalao || '',
      EmailSalao: objSalao.email || '',
      Senha: objSalao.senha || '',
      CEP: objSalao.cep || '',
      Endereco: objSalao.enderecoSalao || '',
      Numero: objSalao.numeroSalao || '',
      Bairro: objSalao.bairroSalao || '',
      Complemento: objSalao.complemento || '',
      Imagem: objSalao.imagem || ''
    };

    for (const [key, value] of Object.entries(campoMapeamento)) {
      formData.append(key, value);
    }

    try {
      const response = await axios.post('https://localhost:7032/api/Salao/cadastrar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        setSaloes([...saloes, response.data]);
        navigate('/PageConclusaoCadastro');
        limparFormulario();
      } else {
        console.error('Erro ao cadastrar salão:', response.data);
      }
    } catch (error) {
      console.error('Erro ao cadastrar salão:', error);
    }
  };

  // Limpar formulario
  const limparFormulario = () => {
    setObjSalao({
      id: '795b125f-ffea-4f75-884e-dc9e39963384',
      nomeSalao: '',
      cnpj: '',
      telefoneSalao: '',
      proprietarioSalao: '',
      email: '',
      senha: '',
      imagem: '',
      cep: '',
      cidade: '',
      enderecoSalao: '',
      numeroSalao: '',
      bairroSalao: '',
      complemento: ''
    });
    setImage(null);
  };

  return (
    <Formulario
      botao={true}
      eventoTeclado={aoDigitar}
      cadastrar={cadastrar}
      obj={objSalao}
      setImage={setImage} // Passar a função para atualizar a imagem
    />
  );
}

export default Cadastro;