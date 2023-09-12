import {box} from "./menu.js"
import Icon from "./phone.svg"
import Icon2 from "./map-marker.svg"

export const contactt = function(){
    box.innerHTML=''
    const all=document.createElement('div')
    all.classList="allc"
    const firstrow= document.createElement('div')
    firstrow.classList="frow"
    const secondrow=document.createElement('div')
    secondrow.classList="srow"
    const ftext=document.createElement('p')
    ftext.textContent="123-456-789"
    const stext=document.createElement('p')
    stext.textContent="Anfiel Road, Liverpool, L4 0TH"

    const icon2= new Image()
    icon2.src=Icon2
    icon2.classList="iccon2"


    const icon= new Image()
    icon.src=Icon
    icon.classList="iccon"


firstrow.appendChild(icon)
firstrow.appendChild(ftext)
secondrow.appendChild(icon2)
secondrow.appendChild(stext)
all.appendChild(firstrow)
all.appendChild(secondrow)
box.appendChild(all)
content.appendChild(box)
}