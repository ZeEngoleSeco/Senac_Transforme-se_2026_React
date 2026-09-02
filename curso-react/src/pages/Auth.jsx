import { Link } from "react-router";

function Auth(){
    return(
        <div>
            <nav class="py-2 px-4 flex itens-center fixed w-full bg-secondary top-0">
                <Link class="py-2 px-4 bg-primary text-white rounded-full ml-2 shadow hover:shadow-inner" to="/">Voltar</Link>
            </nav>
            <pre id="pResponse"></pre>
            <div class="flex flex-col text-center">
                <h2 class="py-2 px-4 text-center">Login</h2>
                
                <form id="form_login" class="my-20 mx-auto p-5 bg-dark rounded-xl">
                    <p class="py-2 px-5 mr-4 text-center text-white my-auto">Coloque suas informações a baixo:</p>
                    <p class="py-2 px-5 m-1 text-white">Email:</p> <input class="bg-white" id="i_emaillogin" type="email" placeholder="@gmail.com" />
                    <p class="py-2 px-5 m-1 text-white">Senha:</p> <input class="bg-white" id="i_passwordlogin" type="password" placeholder="senhA1@" />
                    <Link id="button_login" class="text-white p-2 itens-center my-auto rounded-2xl bg-secondary">Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Auth;