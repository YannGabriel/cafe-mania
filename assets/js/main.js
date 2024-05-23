
//objetos - Normais - left-middle

const myObserverN = new IntersectionObserver( (entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('showN')
    } else{
      entry.target.classList.remove('showN')
    }
  })
})

const elementsN = document.querySelectorAll('.hiddenN');

elementsN.forEach((element) => myObserverN.observe(element));


// Objetos em Y -baixo-cima

const myObserverY = new IntersectionObserver( (entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('showY')
    } else{
      entry.target.classList.remove('showY')
    }
  })
})

const elementsY = document.querySelectorAll('.hiddenY');

elementsY.forEach((element) => myObserverY.observe(element));