import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-green-600 text-white w-full">
                <div className="flex flex-col items-center py-6 container w-full">
                    <p className='font-bold text-xl mb-2'>Farmácia JS | Copyright: {data}</p>
                    <p className='text-lg mb-4'>Acesse nossas redes sociais</p>
                    <div className='flex gap-4'>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <LinkedinLogo size={40} weight='bold' className="hover:text-blue-500 transition duration-300"/>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <InstagramLogo size={40} weight='bold' className="hover:text-pink-500 transition duration-300"/>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FacebookLogo size={40} weight='bold' className="hover:text-blue-700 transition duration-300"/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
