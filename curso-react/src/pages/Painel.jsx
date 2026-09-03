import { useState } from 'react';
import { Link } from 'react-router'

function Painel() {

    const [modal, setModal] = useState(false);

    return (

        <div className="
    fixed
    inset-0
    z-50
    flex
    items-center
    justify-center
    bg-black/70
    backdrop-blur-sm
    px-4
">
            <nav className="py-2 px-4 flex itens-center top-0 fixed z-50 w-full bg-[#1c1d24]/95 backdrop-blur-md shadow-lg">

                <Link className="py-2 px-4 bg-purple-700 text-white rounded-full shadow hover:bg-secondary" to="/">Início</Link>

            </nav>

            {modal && (
                <div className="relative w-full max-w-md">

                    <div className="
            absolute
            inset-0
            bg-purple-700/30
            blur-3xl
            rounded-full
        "></div>


                    <div className="
            relative
            w-full
            p-8
            bg-[#080808]
            border
            border-purple-900/40
            rounded-2xl
            shadow-2xl
            flex
            flex-col
        ">

                        <a onClick={() => setModal(false)}
                            className="
                    absolute
                    top-4
                    right-4
                    w-8
                    h-8
                    flex
                    items-center
                    justify-center
                    rounded-full
                    text-gray-400
                    hover:text-white
                    hover:bg-red-600
                    transition-all
                    duration-300
                    cursor-pointer
                "
                        >
                            X
                        </a>


                        <h2 className="
                text-2xl
                font-bold
                text-center
                text-white
                mb-2
            ">
                            Cadastre um novo usuário
                        </h2>

                        <p className="
                text-center
                text-gray-400
                text-sm
                mb-6
            ">
                            Preencha seus dados para criar sua conta
                        </p>


                        <form
                            className="
                    flex
                    flex-col
                    gap-5
                "
                        >

                            <div>
                                <label
                                    htmlFor="nome"
                                    className="
                            block
                            mb-2
                            text-sm
                            font-medium
                            text-gray-200
                        "
                                >
                                    Nome
                                </label>

                                <input
                                    id="nome"
                                    type="text"
                                    placeholder="Digite seu nome completo"
                                    className="
                            w-full
                            px-4
                            py-3
                            bg-[#17171c]
                            border
                            border-gray-700
                            rounded-xl
                            text-white
                            outline-none
                            placeholder:text-gray-500
                            transition
                            duration-300
                            focus:border-purple-600
                            focus:ring-2
                            focus:ring-purple-600/20
                        "
                                />
                            </div>


                            <div>
                                <label
                                    htmlFor="email"
                                    className="
                            block
                            mb-2
                            text-sm
                            font-medium
                            text-gray-200
                        "
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Digite seu melhor email"
                                    className="
                            w-full
                            px-4
                            py-3
                            bg-[#17171c]
                            border
                            border-gray-700
                            rounded-xl
                            text-white
                            outline-none
                            placeholder:text-gray-500
                            transition
                            duration-300
                            focus:border-purple-600
                            focus:ring-2
                            focus:ring-purple-600/20
                        "
                                />
                            </div>


                            <div>
                                <label
                                    htmlFor="senha"
                                    className="
                            block
                            mb-2
                            text-sm
                            font-medium
                            text-gray-200
                        "
                                >
                                    Senha
                                </label>

                                <input
                                    id="senha"
                                    type="password"
                                    placeholder="Letra maiúscula e um número"
                                    className="
                            w-full
                            px-4
                            py-3
                            bg-[#17171c]
                            border
                            border-gray-700
                            rounded-xl
                            text-white
                            outline-none
                            placeholder:text-gray-500
                            transition
                            duration-300
                            focus:border-purple-600
                            focus:ring-2
                            focus:ring-purple-600/20
                        "
                                />
                            </div>


                            <div>
                                <label
                                    htmlFor="nascimento"
                                    className="
                            block
                            mb-2
                            text-sm
                            font-medium
                            text-gray-200
                        "
                                >
                                    Data de nascimento
                                </label>

                                <input
                                    id="nascimento"
                                    type="date"
                                    className="
                            w-full
                            px-4
                            py-3
                            bg-[#17171c]
                            border
                            border-gray-700
                            rounded-xl
                            text-white
                            outline-none
                            transition
                            duration-300
                            focus:border-purple-600
                            focus:ring-2
                            focus:ring-purple-600/20
                        "
                                />
                            </div>


                            <button
                                type="submit"
                                className="
                        w-full
                        py-3
                        mt-2
                        rounded-xl
                        bg-purple-700
                        text-white
                        font-semibold
                        shadow-lg
                        transition-all
                        duration-300
                        hover:bg-purple-600
                        hover:shadow-purple-900/50
                        hover:scale-[1.02]
                        active:scale-[0.98]
                    "
                            >
                                Criar conta
                            </button>

                        </form>

                    </div>

                </div>
            )}

            <h2 className="py-2 px-4 mt-5">Resposta</h2>
            <h2 className="py-2 px-4 mt-5"></h2>
            <table className="py-2 px-4 mt-5">
                <thead>
                    <th className="text-white">Nome</th>
                    <th className="text-white">Email</th>
                    <th className="text-white">Ações</th>
                </thead>
                <tbody className="font-secondary">

                </tbody>
            </table>
            <a onClick={() => setModal(true)} class="rounded-full bg-primary text-white px-4 py-3 fixed bottom-0 right-0 hover:shadow-inner shadow cursor-pointer"> + </a>
        </div>
    )
}

export default Painel;