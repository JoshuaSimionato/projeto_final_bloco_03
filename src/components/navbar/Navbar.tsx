import { User, ShoppingCart, MagnifyingGlass } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <div className='flex justify-center bg-green-600 py-4 w-full text-white'>
            <div className="flex justify-between text-lg container">
                <Link to='/home'>
                    <img
                        src="https://ik.imagekit.io/z07oryhv9/images%20(4).jpg?updatedAt=1725453270674"
                        alt="Logo"
                        className='w-60'
                    />
                </Link>

                <div className="relative flex flex-1 justify-center items-center w-30 text-black">
                    <form className="flex justify-center w-3/4">
                        <input className="px-4 py-3 rounded-lg w-10/12 h-9 focus:outline-none text-gray-800"
                            type="search"
                            placeholder="Buscar produto ou medicamento"
                            id="busca"
                            name="busca"
                            required
                        />
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-700 dark:bg-blue-600 p-2.5 border border-blue-700 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 w-9 h-9 font-medium text-sm text-white ms-2 focus:outline-none">
                            <MagnifyingGlass size={14} weight="bold" />
                        </button>
                    </form>
                </div>

                <div className='flex gap-6 items-center'>
                    <Link to='/produtos' className='hover:underline'>Produtos</Link>
                    <Link to='/categorias' className='hover:underline'>Categorias</Link>
                    <Link to='/cadcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                    <User size={28} weight='bold' />
                    <ShoppingCart size={28} weight='bold' />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
