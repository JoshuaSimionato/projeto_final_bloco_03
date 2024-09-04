import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";

interface CardProdutoProps {
    produto: Produto
  }

  function CardProdutos({produto}: CardProdutoProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-slate-700  text-white font-bold text-2xl'>Produto</header>
            <p className='p-8 text-3xl bg-white h-full'>{produto.nome}</p>
            <div className="flex">
                <Link to={`/editarproduto/${produto.id}`}
                    className='w-full text-slate-100 bg-teal-400 hover:bg-teal-700 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarproduto/${produto.id}`}
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                        flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardProdutos;