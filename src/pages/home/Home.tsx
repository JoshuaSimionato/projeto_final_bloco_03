function Home() {
    return (
        <>
            <div className="flex justify-center bg-green-200 h-screen">
                <div className='grid grid-cols-2 text-gray-900 container h-full items-center'>
                    <div className="flex flex-col justify-center items-center gap-4 py-8">
                        <h2 className='font-bold text-5xl'>
                            Bem-vindo à Farmácia JS!
                        </h2>
                        <p className='text-lg'>Aqui você encontra produtos de qualidade para o seu bem-estar!</p>

                        <div className="flex justify-around gap-4">
                            <button className='border-2 border-green-700 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded transition-all'>
                                Novo Produto
                            </button>
                            <button className='border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-6 py-3 rounded transition-all'>
                                Ofertas
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img
                            src="https://ik.imagekit.io/z07oryhv9/images%20(2).jpg?updatedAt=1725452848145"
                            alt="Imagem Página Home"
                            className='w-full h-3/4 object-cover rounded-lg shadow-lg'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
