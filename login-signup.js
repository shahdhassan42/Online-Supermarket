function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".input_error").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".input_error").textContent = "";
}
function home()
{
    window.location.href="home.html";
}
function admin()
{
    window.location.href="admin.html";
}
   document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("hidden");
        createAccountForm.classList.remove("hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("hidden");
        createAccountForm.classList.add("hidden");
        
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupEmail" && e.target.value.length > 0 && e.target.value.indexOf("@")==-1) {
                setInputError(inputElement, "Email must contain @");
            }
            else if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "loginid" && e.target.value.length == 0) {
                setInputError(inputElement, "This slot can't be empty");
            }
            else if (e.target.id === "loginpassword" && e.target.value.length==0) {
                setInputError(inputElement, "This slot can't be empty");
            }

        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
document.getElementById("lbtn").addEventListener("click", e => {
    if (document.getElementById ("loginid") && document.getElementById ("loginid").value.length == 0) {
        setInputError(inputElement, "This slot can't be empty");
    }
    else if (document.getElementById("loginpassword")&&document.getElementById ("loginpassword").value.length==0) {
        setInputError(inputElement, "This slot can't be empty");
    }
    else if (document.getElementById("loginid") && document.getElementById ("loginid").value =="admin@gmail.com") {
        admin();
    }
    else{
  e.preventDefault();
   home();
    }
});