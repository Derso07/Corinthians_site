export default function initborder(){
    const border = document.querySelectorAll('[data-sroll] a');

    
    const removeBorder = window.addEventListener('scroll', function(r){
        if(window.scrollY === 0){
            document.querySelector('[data-sroll] a[href^="#historia"').classList.remove('ativo');         
            document.querySelector('[data-sroll] a[href^="#escudos"').classList.remove('ativo');
        }
    })
   
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
