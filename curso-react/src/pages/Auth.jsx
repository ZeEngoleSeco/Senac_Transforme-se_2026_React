import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import {supabase} from '../../utils/supabase';

function Auth() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [msg, setMsg] = useState("");

    const nav = useNavigate()

    async function handleRegister() {

        const {
            data: loginData, error: loginError
        } = await supabase.auth.signInWithPassword({
            email: loginData.email,
            password: loginData.senha
        });
        

        if (!loginData) {
            console.log("Usuário não reconhecido")
            return
        }


        console.log("Usuário logado")
        localStorage.setItem("logged", JSON.stringify(loginData))
        nav("/painel")

    }

    return (

        <div className="
        min-h-screen
        bg-black/70
        text-white
        ">
            <nav className="
            fixed
            z-50
            w-full
            bg-[#1c1d24]/95
            backdrop-blur-md
            shadow-lg
            ">
                <div className="
                mx-auto 
                px-6 
                py-4 
                flex">
                    <Link to="/"
                        className="
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
                    active:scale-[0.98]
                    ">
                        Voltar
                    </Link>
                </div>
            </nav>

            <main className="
            min-h-screen
            flex 
            items-center 
            justify-center 
            px-4 
            pt-20
            ">


                <div className=" 
                relative 
                w-full 
                max-w-md
            ">
                    <div className="
                absolute
                inset-0
                z-0 
                pointer-events-none 
                bg-purple-700/20 
                blur-3xl 
                rounded-full
                "></div>
                    <div className="
                relative
                z-10 
                mb-12
                ">
                        <div className="
                    text-center 
                    mb-8
                    ">
                            <h1 className="
                        text-4xl 
                        font-bold
                        ">
                                Login
                            </h1>
                            <p className="
                        mt-2 
                        text-gray-400
                        ">
                                Entre na sua conta para continuar
                            </p>
                        </div>
                        <span>
                            {msg}
                        </span>
                        <form id="form_login"
                            className="w-full 
                    p-8 bg-[#080808] 
                    border 
                    border-purple-900/40 
                    rounded-2xl 
                    shadow-2xl
                    ">
                            <div className="mb-6">
                                <label htmlFor="i_emaillogin"
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
                                    id="i_emaillogin"
                                    type="email"
                                    value={email}
                                    placeholder="Digite seu email"
                                    className="w-full 
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
                                placeholder:text-gray-500"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {email}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="i_passwordlogin"
                                    className="
                                block mb-2 
                                text-sm 
                                font-medium 
                                text-gray-200"
                                >
                                    Senha
                                </label>
                                <input
                                    id="i_passwordlogin"
                                    type="password"
                                    value={senha}
                                    placeholder="Digite sua senha"
                                    className="w-full 
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
                                placeholder:text-gray-500"
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                {senha}
                            </div>
                            <a
                                onClick={handleRegister}
                                type="submit"
                                className="
                            w-full 
                            py-3 rounded-xl 
                            bg-purple-700 text-white 
                            font-semibold shadow-lg 
                            transition-all duration-300 
                            hover:bg-purple-600 
                            hover:shadow-purple-900/40 
                            hover:scale-[1.02] 
                            active:scale-[0.98]"
                                to="/painel"
                            >
                                Login
                            </a>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Auth;