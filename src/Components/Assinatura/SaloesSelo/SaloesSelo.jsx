// import React, { useState, useEffect } from 'react';
import style from './SaloesSelo.module.css';
import ModalTeste from '../../Saloes/Modal/ModalTeste'
import ImgCentroBeleza from '../../../imagens/salao1.svg';
import ImageSalaoEncanto from '../../../imagens/salao3.svg';
import ImgGlam from '../../../imagens/salao2.svg';


function SaloesSelo() {
    return(
        <>
            <section className={style.saloesSelo}>
                <h2>Impulsione o seu salão e faça parte do nosso propósito</h2>
                <div className={style.containerSaloesSelo}>
                    <div className={style.salaoSelo}>
                        <ModalTeste imgCard={ImgCentroBeleza} NomeSalao="Centro de Beleza" EndSalao="Rua Augusta, 321 - Consolação" ModalTitle="Centro de Beleza" ImageSalaoModal={ImgCentroBeleza} TelSalao="(11) 97890-1234"/>
                    </div>

                    <div className={style.salaoSelo}>
                        <ModalTeste imgCard={ImageSalaoEncanto} NomeSalao="Salão Encanto" EndSalao="Rua Augusta, 123 - Consolação" ModalTitle="Salão Encanto" ImageSalaoModal={ImageSalaoEncanto} TelSalao="(11) 91234-5678"/>
                    </div>

                    <div className={style.salaoSelo}>
                        <ModalTeste imgCard={ImgGlam} NomeSalao="Estúdio Glam" EndSalao="Av. Higienópolis, 789 - Higienópolis" ModalTitle="Estúdio Glam" ImageSalaoModal={ImgGlam} TelSalao=" (11) 90123-4567"/>
                    </div>
                </div>
            </section>
        </>
    )
}

// function SaloesSelo() { PARA OS SALÕES VIREM AUTOMATICAMENTE DO BANCO DE DADOS
//     const [saloes, setSaloes] = useState([]);

//     useEffect(() => {
//         // Função para buscar salões do backend
//         async function fetchSaloes() {
//             try {
//                 const response = await fetch('http://localhost:5000/api/salao/listar-aleatorios'); // Ajuste o endpoint conforme seu ambiente
//                 const data = await response.json();
//                 setSaloes(data);
//             } catch (error) {
//                 console.error('Erro ao buscar os salões:', error);
//             }
//         }

//         fetchSaloes();
//     }, []);

//     return (
//         <section className={style.saloesSelo}>
//             <h2>Impulsione o seu salão e faça parte do nosso propósito</h2>
//             <div className={style.containerSaloesSelo}>
//                 {saloes.map((salao, index) => (
//                     <div className={style.salaoSelo} key={index}>
//                         <ModalTeste
//                             imgCard={salao.ImagemBase64} // A imagem já estará em base64
//                             NomeSalao={salao.NomeSalao}
//                             EndSalao={salao.Endereco}
//                             ModalTitle={salao.NomeSalao}
//                             ImageSalaoModal={salao.ImagemBase64}
//                             TelSalao={salao.TelefoneSalao}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }


export default SaloesSelo;