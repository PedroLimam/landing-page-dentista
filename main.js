const $dentistica = document.querySelector(".container-dentistica")
const $ortodontia = document.querySelector(".container-ortodontia")
const $estetica = document.querySelector(".container-estetica")
const $home = document.querySelector(".home").offsetHeight
const $nav = document.querySelector("nav")
const $containerServices = document.querySelector(".container-options-services")
const $servico1 = document.querySelector(".serviço1")
const $servico2 = document.querySelector(".serviço2")
const $servico3 = document.querySelector(".serviço3")

$containerServices.addEventListener("onchange", function(e){
    console.log(e.target.value)
})

$containerServices.addEventListener("click", function(e){
    e.stopPropagation()
    if(e.target.parentNode.classList.contains("serviço1")){
        $servico1.classList.add("border-bottom")
        $servico2.classList.remove("border-bottom")
        $servico3.classList.remove("border-bottom")
        $dentistica.style.cssText = "display: flex;"
        $ortodontia.style.cssText = "display: none;"
        $estetica.style.cssText = "display: none;"
    }
    if(e.target.parentNode.classList.contains("serviço2")){
        $servico2.classList.add("border-bottom")
        $servico1.classList.remove("border-bottom")
        $servico3.classList.remove("border-bottom")
        $ortodontia.style.cssText = "display: flex;"
        $dentistica.style.cssText = "display: none;"
        $estetica.style.cssText = "display: none;"
    }
    if(e.target.parentNode.classList.contains("serviço3")){
        $servico3.classList.add("border-bottom")
        $servico1.classList.remove("border-bottom")
        $servico2.classList.remove("border-bottom")
        $estetica.style.cssText = "display: flex;"
        $ortodontia.style.cssText = "display: none;"
        $dentistica.style.cssText = "display: none;"
    }
})

function scrowShawdown(){
    if(window.scrollY > $home){
        $nav.classList.add("scroll")
    } else{
        $nav.classList.remove("scroll")
    }
}

window.addEventListener('scroll', function(){
    scrowShawdown()
})


const elementsHome = document.querySelectorAll('[data-animeHome')

function animeScrollHome(){
    const windowTop = window.pageYOffset + (window.innerHeight * 0.10) 

    elementsHome.forEach(function(element){
        if(windowTop < element.offsetTop){
            element.classList.add(animationClass)
        }else{
            element.classList.remove(animationClass)
        }
    });
}


const elementsAnime = document.querySelectorAll('[data-anime')
const animationClass = 'animate'
console.log(elementsAnime)

function animeScroll(){
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75) 

    elementsAnime.forEach(function(element){
        if(windowTop > element.offsetTop){
            element.classList.add(animationClass)
        }else{
            element.classList.remove(animationClass)
        }
    });
}

window.addEventListener("scroll",function(){
    animeScroll()
    animeScrollHome()
})

