const vertical = document.querySelector('.vertical')
const horizontal = document.querySelector('.horizontal')
const target = document.querySelector('.target')
const tag = document.querySelector('.tag')


addEventListener('load', ()=>{
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width/2;
    const targetHalfHeight = targetRect.height/2;
    
    document.addEventListener('mousemove', ()=> {
        const x = event.clientX
        const y = event.clientY
    
        //성능개선
        vertical.style.transform = `translateX(${x}px)`
        horizontal.style.transform = `translateY(${y}px)`
        target.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalfHeight}px)`
        
        // vertical.style.left = `${x}px`
        // horizontal.style.top = `${y}px`
        // target.style.left = `${x}px`
        // target.style.top = `${y}px`
        // tag.style.left = `${x}px`
        // tag.style.top = `${y}px`
        tag.innerHTML = `${x},${y}`
        tag.style.transform = `translate(${x}px , ${y}px )`
})


} )