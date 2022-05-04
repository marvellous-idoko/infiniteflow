let counter = 1

var cont1 = document.getElementById('mainCont')
var cont2 = document.getElementById('mainCont2')

setInterval(
    ()=>{displayer()}, 20000);


function displayer() {
 if (counter == 1) {
     cont1.style.display = 'block'
     cont2.style.display = 'none'
    counter = 0

 }else{
    cont1.style.display = 'none'
    cont2.style.display = 'block'
    counter = 1
}

}
displayer()