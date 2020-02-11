// Your code goes here
let nav = document.querySelector('.nav').children 
console.log(nav)
let arr = Array.from(nav)
document.querySelectorAll('.nav a').forEach(elem => elem.addEventListener('click', e => {
    e.preventDefault()
}))

arr.forEach(elem => elem.addEventListener('mouseenter', e => {
 elem.style.color = 'red';
 elem.style.background = 'lime'
 elem.style.transform = "scale(1.5)"
}))

arr.forEach(elem => elem.addEventListener('mouseleave', e => {
 elem.style.color = 'black';
 elem.style.background = 'none'
 elem.style.transform = 'scale(1)'
}))





let firstImg = document.querySelector('.intro img')
 firstImg.addEventListener('mouseover', e => {
  firstImg.style.transform = 'scale(1.3)'
})

firstImg.addEventListener('mouseleave', e => {
    firstImg.style.transform = 'scale(1)'
})

let h2 = document.querySelector('.intro p')
h2.addEventListener('mousedown', e => {
    h2.style.background = 'blue'
})
h2.addEventListener('mouseup', e => {
    h2.style.background = 'none'
})

let changeImg = document.querySelector('.img-content img')
changeImg.addEventListener('mouseover', e => {
    changeImg.src = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
})

changeImg.addEventListener('dblclick', e => {
    changeImg.src = 'img/adventure.jpg'
})

let intro = document.querySelector('.intro')
 intro.setAttribute('tabindex',0)

intro.addEventListener('keypress', (e) => {
    intro.style.backgroundColor = 'salmon'
})

intro.addEventListener('wheel', e => {
    intro.style.background = 'none'
})

let divParent = document.querySelector('.content-destination')
divParent.addEventListener('click', e => {
    divParent.style.background = 'slategrey'
})

let divChild = document.querySelector('.content-destination h2')
divChild.addEventListener('click', e => {
    divChild.style.color = 'magenta'
    e.stopPropagation()
})

document.querySelector('.img-content').addEventListener('click', e => {
    gsap.to('.img-content', {
        duration: 1,
        rotateY: 180,
        ease: "elastic(1, 0.75)",
        repeat: 1,
        yoyo: true
    })
})

document.querySelector('.nav').addEventListener('mouseenter', e => {
    gsap.to('.nav', {
        duration: 2,
        rotateY: 360,
        repeat: 1,
        yoyo: true
    })})

document.querySelector('.logo-heading').addEventListener('mousedown', e => {
    gsap.to('.logo-heading', {
        scaleX: 1.5,
        scaleY: 1.5,
        x: 100,
        y: 75,
        duration: 2,
        rotateY: 360,
        repeat: 1,
        ease: "elastic(1, 3)",
        yoyo: true
    })})









  


