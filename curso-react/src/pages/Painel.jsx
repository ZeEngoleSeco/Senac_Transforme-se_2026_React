import { useEffect, useState } from 'react'
import { Link } from 'react-router'

function Painel() {

    const [modal, setModal] = useState(false); //bollean de verdadeiro ou falso
    const [users, setUsers] = useState([]); //vetor
    const [user, setUser] = useState({});//objeto
    const [logged, setLogged] = useState({});

    useEffect(
        () => {
            const logged = JSON.parse(localStorage.getItem('logged'));
            setLogged(logged);
        },
        []
    );

    useEffect(
        () => {
            const usersTemp = JSON.parse(localStorage.getItem('users'));
            if(usersTemp) setUsers(usersTemp)
        },
        []
    )

    function handleRegister() {
        //users.push(user); usuário empurrado nos usuários
        const newUsers = [...users, user];
        setUsers(newUsers);
        localStorage.setItem('users', JSON.stringify(newUsers));
        setUser({});
        setModal(false);
    }

    function updateUser(pUser) {
        setModal(true);
        setUser(pUser);
    }

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
            <nav className="
            py-2 
            px-4 
            flex 
            itens-center 
            top-0 
            fixed 
            z-50 
            w-full 
            bg-[#1c1d24]/95 
            backdrop-blur-md 
            shadow-lg
            ">

                <Link className="
                py-2 
                px-4 
                bg-purple-700 
                text-white 
                rounded-full 
                shadow 
                hover:bg-purple-600 
                hover:shadow-purple-900/50 
                transition-all 
                duration-300 
                hover:scale-[1.02] 
                active:scale-[0.98]"
                    to="/">
                    Início
                </Link>

            </nav>

            <h3>
                Bem Vindo, {logged?.nome}
            </h3>

            {modal && (
                <div className="
                relative 
                w-full 
                max-w-md
                ">

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
                        ">
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

                        {JSON.stringify(user, null, 4)}
                        <form
                        className="
                        flex
                        flex-col
                        gap-5
                        ">

                            <div>
                                <label
                                htmlFor="nome"
                                className="
                                block
                                mb-2
                                text-sm
                                font-medium
                                text-gray-200
                                ">
                                    Nome
                                </label>

                                <input
                                    value={user.nome}
                                    onChange={(e) => setUser({ ...user, nome: e.target.value })}
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
                                    "/>
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
                                    ">
                                    Email
                                </label>

                                <input
                                    value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
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
                                    "/>
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
                                    ">
                                    Senha
                                </label>

                                <input
                                    onChange={(e) => setUser({ ...user, senha: e.target.value })}
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
                                    "/>
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
                                    ">
                                    Data de nascimento
                                </label>

                                <input
                                    value={user.nascimento}
                                    onChange={(e) => setUser({ ...user, nascimento: e.target.value })}
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
                                    "/>
                            </div>


                            <button
                                onClick={handleRegister}
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
                    {users.map( u => (
                            <tr>
                                <td>{u.nome}</td>
                                <td>{u.email}</td>
                                <td>
                                    <a className="
                                        cursor-pointer
                                        rounded-full
                                        hover:text-white
                                        hover:bg-red-600
                                        transition-all
                                        duration-300
                                        cursor-pointer
                                        border-red-900
                                        border
                                        px-4
                                        shadow
                                    "
                                    >
                                        X
                                    </a>
                                    <a className="
                                        cursor-pointer
                                        rounded-full
                                        hover:text-white
                                        hover:bg-green-600
                                        transition-all
                                        duration-300
                                        cursor-pointer
                                        border
                                        border-green-900
                                        px-4
                                        shadow
                                        mx-4
                                        "
                                        onClick={()=> updateUser(u)}
                                    >
                                        V
                                    </a>
                                </td>
                            </tr>
                    ))}
                </tbody>
            </table>
            <a 
                onClick={() => setModal(true)} 
                class="
                    rounded-full 
                    text-white 
                    px-4 
                    py-3 
                    fixed 
                    bottom-0 
                    right-0 
                    border 
                    border-purple-900 
                    hover:text-white 
                    hover:bg-purple-700 
                    transition-all 
                    duration-300 
                    shadow 
                    cursor-pointer
                "> 
                    ✔ 
                </a>
        </div>
    )
}

export default Painel;