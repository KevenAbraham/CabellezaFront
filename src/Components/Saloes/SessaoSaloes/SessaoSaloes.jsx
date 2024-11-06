import { useEffect, useState } from 'react';
import style from './SessaoSaloes.module.css';
import ModalTeste from '../Modal/ModalTeste';

function SessaoSaloes() {
    const [saloes, setSaloes] = useState([]); // Estado para armazenar os salões
    const [currentPage, setCurrentPage] = useState(1); // Estado para a página atual
    const itemsPerPage = 10; // Quantidade de salões por página
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const [totalPages, setTotalPages] = useState(1); // Estado para o número total de páginas

    useEffect(() => {
        console.log('Fetching saloes...');
        const fetchSaloes = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://localhost:7032/api/Salao/listar?page=${currentPage}&limit=${itemsPerPage}`);
                console.log("Entrou no try");
                const data = await response.json();
                console.log(data);
                setSaloes(data.saloes); // Note que 'saloes' está em minúsculo
                setTotalPages(data.totalPages); 
                setLoading(false); 
            } catch (error) {
                console.error('Erro ao buscar salões:', error);
                setLoading(false);
            }
        };

        fetchSaloes();
    }, [currentPage]);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    if (loading) {
        return <p>Carregando salões...</p>; 
    }

    return (
        <div className={style.SessaoSaloes}>
            <div className={style.SessaoTituloSaloes}>
                <div className={style.ImagemDetalheSuperiorEsquerdo}>
                    <div className={style.AreaTituloSessaoSaloes}>
                        <h1 className={style.TituloSessaoSaloes}>Salões que devolvem sorrisos</h1>
                    </div>
                </div>
            </div>
    
            <div className={style.AreaCardsAside}>
                <div className={style.AreaCardsSaloes}>
                    <div className={style.GridSaloes}>
                        {Array.isArray(saloes) && saloes.length > 0 ? (
                            saloes.map((salao, index) => (
                                <ModalTeste
                                    key={index}
                                    imgCard={salao.imagemBase64} // Corrigido para minúsculo
                                    NomeSalao={salao.nomeSalao} // Corrigido para minúsculo
                                    EndSalao={salao.endereco} // Corrigido para minúsculo
                                    ModalTitle={salao.nomeSalao} // Corrigido para minúsculo
                                    ImageSalaoModal={salao.imagemBase64} // Corrigido para minúsculo
                                    TelSalao={salao.telefoneSalao} // Corrigido para minúsculo
                                />
                            ))
                        ) : (
                            <p>Nenhum salão encontrado.</p> 
                        )}
                    </div>
    
                    <div className={style.Paginacao}>
                        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                            Anterior
                        </button>
                        <span>{currentPage} de {totalPages}</span>
                        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                            Próximo
                        </button>
                    </div>
                </div>
    
                <aside className={style.AreaAsideSaloes}>
                    <div className={style.AsidePropaganda1}></div>
                    <div className={style.AsidePropaganda2}></div>
                </aside>
            </div>
        </div>
    );
}

export default SessaoSaloes;