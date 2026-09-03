function Painel(){
    return(
        <body>
         <nav class="py-2 px-4 flex itens-center fixed w-full bg-secondary top-0">
                    <a class="py-2 px-4 bg-primary text-white rounded-full mr-5 shadow hover:shadow-inner mr-auto" href="index.html">Início</a>
                </nav>
        <div id="modal_register" class="fixed top-0 bottom-0 left-0 right-0 hidden items-center justify-center bg-black-50 z-50">
            <div class="relative max-w-md w-full p-2 bg-white rounded-xl shadow-md flex column text-center">
                <a id="bt_close" class="bg-red absolute top-0 right-0 px-2 rounded-full hover:shadow-inner-red cursor-pointer">X</a>
                <h2 class=" px-4 text-center mt-5 text-dark">Cadastre um novo usuário</h2>
                <form class= "flex column p-4 rounded-2xl gap-2">
                    <p class="py-2 px-4 m-1 text-dark input">Nome: <input id="i_name" type="text" placeholder="Digite seu nome completo" /></p>
                    <p class="py-2 px-4 m-1 text-dark input">Email: <input id="i_email" type="email" placeholder="Digite seu melhor email" /></p>
                    <p class="py-2 px-4 m-1 text-dark input">Senha: <input id="i_password" type="password" placeholder="Letra maiúscula e um número" /></p>
                    <p class="py-2 px-4 m-1 text-dark input">Nascimento: <input id="i_date" type="date" /></p>
                    <a id="form_register" class="text-dark p-4 mr-6 ml-6 rounded-2xl bg-third font-1 font-weight hover:shadow-inner shadow cursor-pointer">Salvar</a>
                </form>
            </div>
        </div>
        <h2 class="py-2 px-4 mt-5">Resposta</h2>
        <h2 id="Bem Vindo" class="py-2 px-4 mt-5"></h2>
        <table  class="py-2 px-4 mt-5">
            <thead>
                <th>Nome</th>
                <th>Email</th>
                <th>Ações</th>
            </thead>
            <tbody id="list_user" class="font-secondary">
                
            </tbody>
        </table>
        <a id="add_user" class="rounded-full bg-primary text-white px-4 py-3 fixed bottom-0 right-0 hover:shadow-inner shadow cursor-pointer"> + </a>
    </body>
    )
}