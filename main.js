const h3=document.createElement("h3")
const form=document.createElement("form")
const divButton=document.createElement("div")
const label=document.createElement("label")
const input=document.createElement("input")
const button1=document.createElement("button")
const button2=document.createElement("button")
const ul=document.createElement("ul");


const body=document.querySelector("body")
body.appendChild(h3)
body.appendChild(form)
body.appendChild(ul)

form.appendChild(label)
form.appendChild(input)
form.appendChild(divButton)
divButton.appendChild(button1)
divButton.appendChild(button2)


h3.textContent="ToDo App"
label.textContent="Type a new to-do:"
label.setAttribute( "for" , "ToDo")
input.id="ToDo"
input.name="ToDo"
button1.textContent="Add"
button1.className="addClearStyle"
button1.type="submit"
button2.textContent="clear"
button2.className="addClearStyle"
button2.type="reset"


divButton.id="divButtonStyle"

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    
    const li=document.createElement("li");
    li.textContent=event.target.ToDo.value
    const buttonDelet=document.createElement("button")
    buttonDelet.textContent="Delete"
    buttonDelet.id="deleteButton"
    li.appendChild(buttonDelet)
    ul.appendChild(li)

    const liGrup=document.querySelectorAll("li");
liGrup.forEach((li, i)=>{
    buttonDelet.addEventListener("click",()=>{
        li.remove()
    })
})

})

button2.addEventListener("click", ()=>{

    const li=document.querySelectorAll("li");
   for (let i = 0; i < li.length; i++) {
    li[i].remove()
    
   }


})


