import style from "./Cadastro.module.css";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Formulario from "./Formulario";
import axios from 'axios';

function Cadastro() {

  const [image, setImage] = useState("");
  const [endImg] = useState("./ImgiconU.png");

  // Objeto Salao
  const salao = {
    id: 0,
    nomeSalao: '',
    proprietarioSalao: '',
    email: '',
    senha: '',
    ruaSalao: '',
    numeroSalao: '',
    bairroSalao: '',
    cnpj: '',
    telefoneSalao: '',
    seloSalao: ''
  }

  //UseState
  const [btnFinalizar, setBtnFinalizar] = useState(true);
  const [saloes, setSaloes] = useState([]);
  const [objSalao, setObjSalao] = useState(salao);
  const navigate = useNavigate();

  //UseEffect
  useEffect(() => {
    axios.get('http://localhost:8080/listar')
      .then(response => setSaloes(response.data))
      .catch(error => console.error('Erro ao buscar salões:', error));
  }, []);

  //Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjSalao({ ...objSalao, [e.target.name]: e.target.value });
  }

  // Cadastrar salao
  const cadastrar = () => {
    axios.post('http://localhost:8080/cadastrar', objSalao, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (response.data.mensagem !== undefined) {
          alert(response.data.mensagem);
        } else {
          setSaloes([...saloes, response.data]);
          navigate('/PageConclusaoCadastro');
          limparFormulario();
        }
      })
      .catch(error => console.error('Erro ao cadastrar salão:', error));
  }

  //Limpar formulario
  const limparFormulario = () => {
    setObjSalao(salao);
    setBtnFinalizar(true);
  }


  return (
    <Formulario botao={btnFinalizar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objSalao} />
  );
}

export default Cadastro;