import style from './Footer.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../imagens/logo.svg';
import { IconContext } from "react-icons";
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineFacebook } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

export default function Footer() {
    return (
        <>
            <footer>
                <div className={style.plataforma}>
                    <img src={Logo} alt="Logo Cabelleza" className={style.Logo} />

                    <div>
                        <h2>Plataforma</h2>
                        <ul>
                            <Link to='/'><li>Home</li></Link>
                            <Link to='/SobreNos'><li>Sobre Nós</li></Link>
                            <Link to='/Saloes'><li>Salões</li></Link>
                            <Link to='/Blog'><li>Blog</li></Link>
                            <Link to='/FaleConosco'><li>Fale Conosco</li></Link>
                        </ul>
                    </div>
                    <div>
                        <h2>Ajuda e Suporte</h2>
                        <ul>
                            <Link to='/FaleConosco'><li>Enviar E-mail</li></Link>
                            <Link to='/Assinatura'><li>Perguntas frequentes</li></Link>
                            <Link to='/TermosECondicoes'><li>Termos de condições</li></Link>
                            <Link to='/PoliticaPrivacidade'><li>Política de privacidade</li></Link>
                        </ul>
                    </div>
                    <div>
                        <h2>Contato</h2>
                        <ul>
                            <li><a href="mailto:cabelleeza@gmail.com?subject=Informações sobre o projeto Cabelleza">cabelleeza@gmail.com</a></li>
                            <li><a href="tel:+5511000000000"><BsTelephone />(11)99110-5600</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Redes Sociais</h2>
                        <ul>
                            <IconContext.Provider value={{ className: style.icons_container }}>
                                <a href="https://www.instagram.com/cabelleza_/" target="_blank" className={style.icon}><AiOutlineInstagram /><span>Instagram</span></a>
                                <a href="https://www.facebook.com/profile.php?id=100093713072069" target="_blank" className={style.icon}><AiOutlineFacebook /><span>Facebook</span></a>
                                <a href="https://www.youtube.com/@Cabelleza/featured" target="_blank" className={style.icon}><AiOutlineYoutube /><span>Youtube</span></a>
                            </IconContext.Provider>
                        </ul>
                    </div>
                </div>

                <div className={style.direitos}>
                    <p>Endereço: Rua Tito, nº 54 - Vila Romana, São Paulo - SP, CEP 05051-000</p>
                    <p>© Copyright 2023 - Cabelleza | Todos os direitos reservados</p>
                </div>
            </footer>
        </>
    )
}