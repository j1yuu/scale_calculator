const btns = document.querySelectorAll(".button");
const bSubmit = document.querySelector(".button-convert");
const radios = document.querySelectorAll("input[type=radio]")
let vw = 1440;

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        btns.forEach((button) => {
            button.classList.remove("button-active");
        });

        let actButton = e.target.closest("p")
        actButton.classList.add("button-active")
        if (actButton.classList.contains("button-desctop")) {
            vw = 1440;
        } else if (actButton.classList.contains("button-tablet")) {
            vw = 768;
        } else {
            vw = 360;
        }
        document.getElementById("iBec").value = Calculate();
    });
});

function Calculate() {
    let w = document.getElementById("iWas").value;
    if (radios[0].checked) {
        return w * 100 / vw;
    } else {
        return w * vw / 100
    }
};

bSubmit.addEventListener("click", () => {
    document.getElementById("iBec").value = Calculate();
});
document.querySelector("body").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById("iBec").value = Calculate();
    }
});
document.getElementById('iWas').addEventListener('input', function () {
    document.getElementById("iBec").value = Calculate();
})