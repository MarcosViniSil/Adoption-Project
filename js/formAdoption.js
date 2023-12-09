function sendForm() {
    let name = document.getElementById("name")
    let telephone = document.getElementById("telephone")
    let email = document.getElementById("email")
    let adress = document.getElementById("adress")
    let nameFriend = document.getElementById("nameFriend")
    if(validate(name,telephone,email,adress,nameFriend)){
        setTimeout(() => { window.location.href = "../html/success.html"; }, 1000);
    }else{
        window.alert("Algum campo não foi preenchido")
    }
}

function validate(name, telephone, email, adress, nameFriend) {
    if (name.value !== "" && telephone.value !== "" && email.value !== "" && adress.value !== "" && nameFriend !== "") {
        return true
    } else {
        return false
    }
}
