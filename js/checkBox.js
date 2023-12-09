const user = document.getElementsByClassName("inputs")
let dog1 = document.getElementById("image1Dog")
let dog2 = document.getElementById("image2Dog")
let dog3 = document.getElementById("image3Dog")

let cat1 = document.getElementById("image1Cat")
let cat2 = document.getElementById("image2Cat")
let cat3 = document.getElementById("image3Cat")



for (let i = 0; i < user.length; i++) {
    user[i].addEventListener('change', function () {
        if (this.checked) {
            if (i == 0) {
                dog1.style.display = "flex"
                dog2.style.display = "flex"
                dog3.style.display = "flex"
            } else {
                cat1.style.display = "flex"
                cat2.style.display = "flex"
                cat3.style.display = "flex"
            }


        } else if (!this.checked) {
            if (i == 0) {
                dog1.style.display = "none"
                dog2.style.display = "none"
                dog3.style.display = "none"
            } else {
                cat1.style.display = "none"
                cat2.style.display = "none"
                cat3.style.display = "none"
            }

        }



    });
}

