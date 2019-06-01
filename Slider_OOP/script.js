window.onload = function(){  
        let slider_1 = new oopSlider({            
            img:"img",
            next:"#next",
            prev:"#prev",
            class:"show",
            auto: true,
            time:"5000"            
        });
}

function oopSlider(obj){        
    this.images = document.querySelectorAll(obj.img); 

    let b = this.images;
    let a = 0;

        if(obj.auto){
            setInterval(next, obj.time);
        }
    
    document.querySelector(obj.next).onclick = next;
    document.querySelector(obj.prev).onclick = prev;            

    function next(){                
        b[a].classList.remove(obj.class);
        a++;
            if(a>=b.length){
                a=0;                        
            } 
        b[a].classList.add(obj.class);                
    };

    function prev(){                
        b[a].classList.remove(obj.class);
        a--;                
            if(a<0){
                a = b.length - 1;
            }
        b[a].classList.add(obj.class);
    }; 
}