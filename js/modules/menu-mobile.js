export default function initMenu(){

    const menuBotao = document.querySelector('[data-menu="botao"');
    const menuLista = document.querySelector('[data-menu-lista');

    function abrirMenu(event){
        menuBotao.classList.add('ativar');
        menuLista.classList.add('ativar');
    
    }
    
    menuBotao.addEventListener('click', abrirMenu);
}