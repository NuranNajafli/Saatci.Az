// Add watch to basket
let count = 0
function addShopping(cnt) {
    if (cnt != null) {
        count += parseInt(cnt);
    }
    else {
        count++;
    }
    document.getElementById("badgeForShopping").innerHTML = count
    alert("Product have added successfully!!")
}

// sign up modal

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];


btn.addEventListener("click", () => {
    modal.style.display = "block";
})

span.addEventListener("click", () => {
    modal.style.display = "none";
})


let childBtn = document.getElementById("childBtn")
let child = document.getElementById("child")
let genderBtn = document.getElementById("genderBtn1")
let genderBtn2 = document.getElementById("genderBtn2")


childBtn.addEventListener("click", () => {
    child.innerHTML = `<textarea placeholder="Write some information about parents"></textarea>`


})
genderBtn.addEventListener("click", () => {
    child.innerHTML = ""

})
genderBtn2.addEventListener("click", () => {
    child.innerHTML = ""
})

let ad = document.getElementById("name");
let surname = document.getElementById("surname")
let num = document.getElementById("num");
let pas = document.getElementById("pas")

ad.addEventListener("focus", () => {
    if (surname.value == "") {
        surname.style.borderColor = "red"
    }
    else if (surname.value !== "") {
        surname.style.borderColor = "green"
    }
    if (num.value == "") {
        num.style.borderColor = "red"
    }
    else if (num.value !== "") {
        num.style.borderColor = "green"
    }
    if (pas.value == "") {
        pas.style.borderColor = "red"
    }
    else if (pas.value !== "") {
        pas.style.borderColor = "green"
    }
    if (num1.value == "") {
        num1.style.borderColor = "red"
    }
    else if (num1.value !== "") {
        num1.style.borderColor = "green"
    }
})


surname.addEventListener("focus", () => {
    if (ad.value == "") {
        ad.style.borderColor = "red"
    }
    else if (ad.value !== "") {
        ad.style.borderColor = "green"
    }
    if (num.value == "") {
        num.style.borderColor = "red"
    }
    else if (num.value !== "") {
        num.style.borderColor = "green"
    }
    if (pas.value == "") {
        pas.style.borderColor = "red"
    }
    else if (pas.value !== "") {
        pas.style.borderColor = "green"
    }
    if (num1.value == "") {
        num1.style.borderColor = "red"
    }
    else if (num1.value !== "") {
        num1.style.borderColor = "green"
    }
})

num.addEventListener("focus", () => {
    if (surname.value == "") {
        surname.style.borderColor = "red"
    }
    else if (surname.value !== "") {
        surname.style.borderColor = "green"
    }
    if (ad.value == "") {
        ad.style.borderColor = "red"
    }
    else if (ad.value !== "") {
        ad.style.borderColor = "green"
    }
    if (pas.value == "") {
        pas.style.borderColor = "red"
    }
    else if (pas.value !== "") {
        pas.style.borderColor = "green"
    }
    if (num1.value == "") {
        num1.style.borderColor = "red"
    }
    else if (num1.value !== "") {
        num1.style.borderColor = "green"
    }

})
pas.addEventListener("focus", () => {
    if (surname.value == "") {
        surname.style.borderColor = "red"
    }
    else if (surname.value !== "") {
        surname.style.borderColor = "green"
    }
    if (num.value == "") {
        num.style.borderColor = "red"
    }
    else if (num.value !== "") {
        num.style.borderColor = "green"
    }
    if (ad.value == "") {
        ad.style.borderColor = "red"
    }
    else if (ad.value !== "") {
        ad.style.borderColor = "green"
    }
    if (num1.value == "") {
        num1.style.borderColor = "red"
    }
    else if (num1.value !== "") {
        num1.style.borderColor = "green"
    }
   
})



let extraMail = document.getElementById("extraMail")

num.addEventListener("keyup", () => {
    let dot = num.value
     if ( dot.includes("@") && dot.includes(".")) {
        extraMail.innerHTML = `<input id="num1" type="text" class="form-control "  placeholder="Write your phone number or e-mail">`
    }

})

let num1 =document.getElementById("num1")

// num1.addEventListener("focus", () => {
//     if (surname.value == "") {
//         surname.style.borderColor = "red"
//     }
//     else if (surname.value !== "") {
//         surname.style.borderColor = "green"
//     }
//     if (num.value == "") {
//         num.style.borderColor = "red"
//     }
//     else if (num.value !== "") {
//         num.style.borderColor = "green"
//     }
//     if (ad.value == "") {
//         ad.style.borderColor = "red"
//     }
//     else if (ad.value !== "") {
//         ad.style.borderColor = "green"
//     }
//     if (pas.value == "") {
//         pas.style.borderColor = "red"
//     }
//     else if (pas.value !== "") {
//         pas.style.borderColor = "green"
//     }
// })

function  buttonSign(){
    alert("Your Account Has Created Successfully!")
}




// Change site color

let isShow = false;
function showColors() {
    if (isShow == false) {
        document.getElementById("openColorDiv").style.right = "0px"
        document.getElementById("openColorDiv").style.transition = "0.5s"
    }
    else {
        document.getElementById("openColorDiv").style.right = "-32px"
        document.getElementById("openColorDiv").style.transition = "0.5s"
    }
    isShow = !isShow
}


function changeColor(color) {

    if (color == "gold") {
        document.getElementById("mainNav").style.backgroundColor = "#b17f14"
        document.getElementById("mainFooter").style.backgroundColor = "#b17f14"
        document.querySelector(".brandTitle").style.color="#b17f14"
        document.querySelector(".signBtn").style.backgroundColor="#b17f14"
        document.querySelector(".brands").style.backgroundColor="#ada697"
        document.querySelectorAll(".moreWatch").forEach(element => {
            element.style.backgroundColor = "#b17f14"
        });
        
    }

    else if (color == "blue") {
        document.getElementById("mainNav").style.backgroundColor = "#192b42"
        document.getElementById("mainFooter").style.backgroundColor = "#192b42"
        document.querySelector(".brandTitle").style.color="#192b42"
        document.querySelector(".signBtn").style.backgroundColor="#192b42"
        document.querySelector(".brands").style.backgroundColor="rgb(226, 240, 253)"
        document.querySelectorAll(".moreWatch").forEach(element => {
            element.style.backgroundColor = "#192b42"
        });
    }
}

// Contact page
let inputName = document.querySelector(".inputName")
let inputEmail = document.querySelector(".inputEmail")
let message = document.querySelector(".message");


inputName.addEventListener("click", ()=>{
    if (inputEmail.value == "") {
        inputEmail.style.borderColor = "red"
    }
    else if (inputEmail.value !== "") {
        inputEmail.style.borderColor = "green"
    }
    if (message.value == "") {
        message.style.borderColor = "red"
    }
    else if (message.value !== "") {
        message.style.borderColor = "green"
    }
    
})

inputEmail.addEventListener("click", ()=>{
    if (inputName.value == "") {
        inputName.style.borderColor = "red"
    }
    else if (inputName.value !== "") {
        inputName.style.borderColor = "green"
    }
    if (message.value == "") {
        message.style.borderColor = "red"
    }
    else if (message.value !== "") {
        message.style.borderColor = "green"
    }
})
message.addEventListener("click", ()=>{
    if (inputEmail.value == "") {
        inputEmail.style.borderColor = "red"
    }
    else if (inputEmail.value !== "") {
        inputEmail.style.borderColor = "green"
    }
    if (inputName.value == "") {
        inputName.style.borderColor = "red"
    }
    else if (inputName.value !== "") {
        inputName.style.borderColor = "green"
    }
})

submit.addEventListener("click", ()=>{
    alert("Your suggestion has sent successfully!!")
})



