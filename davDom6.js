let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let dedadiv = document.querySelectorAll('.dedadiv .imgdiv');
let firstrgoli = document.querySelector('.firstrgoli')

next.addEventListener('click',function(){
    let activee = document.querySelector(".imgdiv.active");
    let rgolebi = document.querySelectorAll('.rgolebi .rgoli')
    
    if (activee.nextElementSibling !=null) {
        activee.classList.remove('active');
        activee.nextElementSibling.classList.add('active');
    
    for(var i = 0; i < rgolebi.length; i++)
        if (dedadiv[i].classList.contains('active'))
        rgolebi[i].classList.add('border');
        else (rgolebi[i].classList.remove('border'))
    }  

    firstrgoli.classList.remove('firstrgoli');

})


prev.addEventListener('click',function(){
    let activee = document.querySelector(".imgdiv.active");
    let rgolebi = document.querySelectorAll('.rgolebi .rgoli')
    if (activee.previousElementSibling !=null) {
        activee.classList.remove('active');
        activee.previousElementSibling.classList.add('active');
    
    for(var i = 0; i < rgolebi.length; i++)
        if (dedadiv[i].classList.contains('active'))
        rgolebi[i].classList.add('border');
        else (rgolebi[i].classList.remove('border'))
    }

})