export default function initScrollInterno(){

     const retornoTopo = window.addEventListener('scroll', function(event){
        
        if(window.scrollY > 1900){
            document.querySelector('[data-scroll-interno').classList.add('btn');
        }else{
            document.querySelector('[data-scroll-interno').classList.remove('btn');
        }
     })
    

}