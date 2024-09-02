// const title = document.querySelector('#title')
const box = document.createElement('div')
const body = document.querySelector('body')  





box.classList.add('wrapper')



box.setAttribute('id', 'bebra')



box.classList.toggle('wrapper')

box.removeAttribute('class')


box.getAttribute('class')

box.classList.add('bebera')







const card = document.querySelector('.card')
const btn = document.querySelector('.card button')
const img = document.querySelector('.card img')
const name = document.querySelector('.card h1')
const changeBtn = document.querySelector('#change')
const originalname = name.innerText
const originalSrc = img.src


btn.onclick = () => {
   card.classList.toggle('red')
   
   
   if(name.innerText == originalname) {
        name.innerText = 'Ronaldo'
   } else {
    name.innerText = originalname
   }




    if(img.src == originalSrc) {
       img.src = 'https://i.ytimg.com/vi/nqck-45tqOI/hq720_2.jpg?sqp=-oaymwEiCMAEENAFSFryq4qpAxQIARUAAAAAJQAAyEI9AICiQ9ABAQ==&rs=AOn4CLC6oqtVogYfCB6hhz1fUv8_UreewA'
    } else {
        img.src = originalSrc
    }
}


// changeBtn.onclick = () => {
//     img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcK3oFFNgcvYOCcGLOeB7JCquJgoHoa4JDtw&s'
// }


const deleteBtn = document.querySelector('#del')

deleteBtn.onclick = () => {
    card.classList.toggle('none')
}