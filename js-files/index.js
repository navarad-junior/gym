function changeText() {

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let form = document.getElementById("formation");
    let header = document.getElementById("color-header");


    if(email.value  && password.value ) {
        document.getElementById("head").innerHTML = "You are welcome. Thanks for login in. Please go through the website"
        form.className = "myForm";
        header.className += " dynamic-head";
    }
    else {
        password.focus()
        password.style.border = "3px solid red"

        email.focus()
        email.style.border = "3px solid red"
    }
}

//let form = document.getElementById("formation");
//form.className = "myForm";