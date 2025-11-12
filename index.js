let btn=document.querySelector(".my_btn");
const button=document.getElementById('addButton');
const container=document.getElementById('container');

btn.addEventListener("click", btn_click);
function btn_click(){
    document.querySelector("body").classList.toggle("body_style")
    document.querySelector(".contacts").classList.toggle("contacts_new")
    document.querySelector(".contacts__phone_value").classList.toggle("text-black")
    document.querySelector(".contacts__address_value").classList.toggle("text-black")
    document.querySelectorAll(".text-white").forEach(element => {
        element.classList.toggle("text-black")
    })
    document.querySelectorAll(".text-green").forEach(element => {
        element.classList.toggle("text-black")
    })
}

button.addEventListener('click', ()=>{
    const newElement=document.createElement('div');
    const rembutton=document.createElement('button');
    newElement.className='new-item';
    newElement.textContent='Новый элемент';
    rembutton.textContent='x';
    rembutton.addEventListener('click', ()=>{
        newElement.remove();
    });
    container.appendChild(newElement);
    newElement.appendChild(rembutton);
});