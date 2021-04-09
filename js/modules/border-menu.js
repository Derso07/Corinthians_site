export default function initborder(){
    const border = document.querySelectorAll('[data-sroll] a')

    function addBorder(index){
        border.forEach((index)=>{
            index.classList.remove('ativo');
        })
        border[index].classList.add('ativo');
    }

    border.forEach((e, index) =>{
        e.addEventListener('click', ()=>{
    addBorder(index);
        });
    })
}