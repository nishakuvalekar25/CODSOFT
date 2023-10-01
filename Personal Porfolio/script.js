function toggleMenu(){
    const menu = document.querySelector(".menu-link");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

// function Send(){
//     console.log("function call")

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "fs21if010@gmail.com",
//         Password : "65DFCA432A45209F801C1B59680F401253FB",
//         To : 'nishakuvalekar25@gmail.com',
//         From : "fs21if010@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }

// const scriptURL = ''
// const form = document.forms['Contact']

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => alert("Thank you! your form is submitted successfully." ))
//     .then(() => {  window.location.reload(); })
//     .catch(error => console.error('Error!', error.message))
// })
