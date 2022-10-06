//const nav=document.querySelector('.nav');

window.addEventListener('scroll',function(){
    document.querySelector('.nav').classList.toggle('active',window.scrollY>0);
})
