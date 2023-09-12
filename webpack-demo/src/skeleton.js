import Icon from "./icon.jpg"
import {menuu} from "./menu.js"
import {contactt} from "./contact.js"
import {homee} from "./home.js"
import {box}from "./menu.js"
export const content= document.querySelector('#content')

export const populate = function(){

const nav=document.createElement('div')
nav.classList="nav"
const home=document.createElement('p')
home.textContent="Home"
home.classList="navp"
const menu=document.createElement('p')
menu.textContent="Menu"
menu.classList="navp"
const contact=document.createElement('p')
contact.textContent="Contact"
contact.classList="navp"
nav.appendChild(home)
nav.appendChild(menu)
nav.appendChild(contact)


contact.addEventListener("click", (e)=>{
contactt()
})

menu.addEventListener("click", (e)=>{
  
 menuu() 
},)
home.addEventListener("click", ()=>{
  homee()
})

const myIcon = new Image();
  myIcon.src = Icon;
 
  myIcon.classList="back"
  
  content.appendChild(myIcon)
  content.appendChild(nav)
  homee()
}
