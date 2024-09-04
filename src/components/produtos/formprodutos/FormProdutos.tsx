import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Produto from "../../../models/Produto"; // Modelo Produto
import { listar, atualizar, cadastrar } from "../../../Services/Service";

function FormProduto() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [produto, setProduto] = useState<Produto>({} as Produto);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await listar(`/produtos/${id}`, setProduto)
    } catch (error: any) {
      alert('Produto não encontrado!')
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto)

        alert('Produto atualizado com sucesso')

      } catch (error: any) {
        alert('Erro ao atualizar o Produto')
      }

    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto)

        alert('Produto cadastrado com sucesso')

      } catch (error: any) {
        alert('Erro ao cadastrar o Produto')
      }
    }

    setIsLoading(false)
    retornar();

  }

  function retornar() {
    navigate("/produtos")
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastrar Produto' : 'Editar Produto'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4"
        onSubmit={gerarNovoProduto}
      >
        <div className="flex flex-col gap-2 ">
          <label htmlFor="produto">Produto</label>
          <input
            type="text"
            placeholder="Nome do Produto"
            name='nome'
            className="border-2 border-slate-700 rounded p-2"
            required
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            placeholder="Preço do Produto"
            name='preco'
            className="border-2 border-slate-700 rounded p-2"
            required
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-slate-400 
          hover:bg-slate-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          {isLoading ?
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
          }
        </button>
      </form>
    </div>
  );
}

export default FormProduto;
