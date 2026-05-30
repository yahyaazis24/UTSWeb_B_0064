// DARK MODE

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkBtn.innerText = "Light Mode";
    }else{
        darkBtn.innerText = "Dark Mode";
    }

});

// MEMBERSHIP CALCULATOR

function calculatePrice(){

    let price =
    document.getElementById("membershipSelect").value;

    document.getElementById("priceResult").innerHTML =
    "Total Membership : Rp " +
    Number(price).toLocaleString("id-ID");

}

// CONTACT VALIDATION

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let message =
    document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){
        alert("Semua field wajib diisi!");
        return;
    }

    alert("Pesan berhasil dikirim!");

    this.reset();

});

// COUNTER ANIMATION

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const speed = target / 100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + speed);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});