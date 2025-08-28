// for header background color change on scroll
const header = document.querySelector('header');
// console.log(header);


const headerColorChange = () => {
if(window.scrollY > 0){
   header.classList.add('sticky')
}
else{
   header.classList.remove('sticky');
}
}

window.addEventListener('scroll', headerColorChange)




// for humburger on click
const bar = document.querySelectorAll('.humburger span')
console.log(bar);


let isActive = false;

const humburger = document.querySelector('.humburger');
const list = document.querySelector('ul')



const openList = () => {

   list.classList.toggle('open-list')
   if(!isActive){
      bar[0].style.transform = 'rotate(45deg)'
      bar[1].style.opacity = '0'
      bar[2].style.transform = 'rotate(-45deg)'
      isActive = true
   }
   else{
      bar[0].style.transform = 'rotate(0deg)'
      bar[1].style.opacity = '1'
      bar[2].style.transform = 'rotate(0deg)'
      isActive = false
   }
}

humburger.addEventListener('click', () => {
   openList()
})
