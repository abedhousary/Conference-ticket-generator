let container = document.querySelector(".container");
let containerTicket = document.querySelector(".container-ticket");
let fullname = document.querySelector("#name");
let email = document.querySelector("#email");
let username = document.querySelector("#username");
let nameholder = document.querySelector(".gradient-text");
let emailholder = document.querySelector(".email");
let nameticketholder = document.querySelector(".customer-name");
let usernameholder = document.querySelector(".usernameholder");
let submit = document.querySelector(".button")


submit.onclick = () => {
    container.style.display = "none"
    containerTicket.style.display = "flex"
    usernameholder.innerHTML = username.value
    emailholder.innerHTML = email.value
    nameticketholder.innerHTML = fullname.value
    nameholder.innerHTML = fullname.value
}





