
let a = document.querySelector(".btn1");
let b = document.querySelector(".mydiv");
let c = ["red","green","blue" , "black"];
let d = 0 ;

a.onclick = function () {

        b.style.backgroundColor = c[d]
        d++;
        if (d===4){
            d = 0
        }

    };
    