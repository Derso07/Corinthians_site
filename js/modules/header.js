export default function initHeader(){

const cancao = window.addEventListener('scroll', function(event){

    if(window.scrollY != 0){
        document.querySelector('[data-header]').classList.add('active');
    }else{
        document.querySelector('[data-header]').classList.remove('active');
    }

})
}