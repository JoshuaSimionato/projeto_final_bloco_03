import { useEffect, useState } from "react";
import Produto from "../../../models/Produto";
import CardProdutos from "../cardprodutos/CardProdutos";
import { DNA } from 'react-loader-spinner';
import { listar } from "../../../Services/Service";

function ListarProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([]);

    async function buscarProdutos() {

        try {
            await listar('/produtos', setProdutos);
        } catch (error: any) {
            alert('Erro ao listar os Produtos')
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, [produtos.length]);

    return (
        <>
            {produtos.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="
                bg-gray-200 
                flex 
                justify-center
                ">
                <div className="my-4 container flex flex-col">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {produtos.map((produto) => (
                            <CardProdutos key={produto.id} produto={produto} />
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
}

export default ListarProdutos;
