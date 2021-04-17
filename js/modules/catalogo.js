export default class Slide{
  
        constructor(slide, catalogo){
            this.slide = document.querySelector('.slide');
            this.catalogo = document.querySelector('.catalogo');
        }

        onStart(event){
            event.preventDefault();
            this.catalogo.addEventListener('mousemove', this.onMove);
        }

        onMove(event){
        }

        ondEnd(event){
            this.catalogo.removeEventListener('mousemove', this.onMove);
        }

        addSlideEvents(){
            this.catalogo.addEventListener('mousedown', this.onStart);
            this.catalogo.addEventListener('mouseup', this.ondEnd);
        }

        bindEvents(){
            this.onStart = this.onStart.bind(this);
            this.onMove = this.onMove.bind(this);
            this.ondEnd = this.ondEnd.bind(this);
        }

        init(){
            this.bindEvents();
            this.addSlideEvents();
                return this;
            }
        }
    
