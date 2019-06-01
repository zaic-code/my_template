window.onload = function(e){
    var links = document.querySelectorAll('a[target="_blank"]');
    
    for(i=0 ; i<links.length; i++){
        links[i].onclick = confirmAway;
    }

    function confirmAway(){
        if(!confirm('Мы не гарантируем безопасность данного ресурса')){
            return false;
        }
        
    }

//  Правило!!
// Стандартное действие браузера которое запланирвоано на этот элемент
// выплняется всегда в последнею очередь
// если на событие подвешать функцию которая возвращает false стандартное событие будет отменено


// команды кторые прерывают выполнение кода 
// alert
// confirm
// prompt


// Отмена сохранения картинок перетаскиванием
// пригодинтся для слайдеров на мобильном устройстве
// так же в том слечае если картинка является декоративным элементом

 let images = document.querySelectorAll('img');

    for(i=0; i<images.length; i++){
        images[i].onmousedown = stopMove;
        images[i].oncontextmenu = stopMove;

    }

    function stopMove(){
        return false
    }


};
