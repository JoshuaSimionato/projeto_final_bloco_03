
function Home() {
    return (
        <>
            <div className="flex justify-center bg-slate-800">
                <div className='grid grid-cols-2 text-white container'>
                    <div className="flex flex-col justify-center items-center gap-4 py-4">
                        <h2 className='font-bold text-5xl'>
                            Seja bem Vindo Farmácia JS!
                        </h2>
                        <p className='text-xl'>Aqui você encontra os produtos de qualidade!</p>

                        <div className="flex justify-around gap-4">
                            <div className='border-2 text-whiteborder-white bg-slate-800 px-4 py-2 border-solid rounded'>
                                Novo Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://ik.imagekit.io/z07oryhv9/images%20(2).jpg?updatedAt=1725452848145"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home