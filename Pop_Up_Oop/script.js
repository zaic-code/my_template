function Pop_Up(obj){
    this.modal = document.querySelector(obj.modal);
    this.overlay = document.querySelector(obj.overlay);
    let that = this;

    this.open = function(content){
        that.modal.innerHTML = content;
        that.modal.classList.add('show');
        that.overlay.classList.add('show');
    }

    this.close = function(){
        that.modal.classList.remove('show');
        that.overlay.classList.remove('show');
    }

    this.overlay.onclick = that.close;
}

window.onload= function(){
    let modal = new Pop_Up({
        modal:'.modal',
        overlay: '.overlay'
    });

    let form = document.querySelector('.for_call_popup');

    document.querySelector('a').onclick = function(){
        modal.open(form.innerHTML);
    }
}