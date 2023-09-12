import {box} from "./menu.js"


export const homee = function(){
    box.innerHTML=''
    const all=document.createElement('div')
    all.classList="hall"
    const top=document.createElement('p')
    top.textContent="SEA RESTAURANT"
    const bottom=document.createElement('p')
    bottom.textContent="BARATIE"


    box.appendChild(all)
    all.appendChild(top)
    all.appendChild(bottom)
content.appendChild(box)
}