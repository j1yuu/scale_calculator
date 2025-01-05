const btns = document.querySelectorAll(".button");
const bSubmit = document.querySelector(".button-convert");
const radios = document.querySelectorAll("input[type=radio]")

const SIZES = {
    DESCTOP: 1920,
    TABLET: 768,
    MOBILE: 375
}

let vw = SIZES.DESCTOP;

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        btns.forEach((button) => {
            button.classList.remove("button-active");
        });

        let actButton = e.target.closest("p")
        actButton.classList.add("button-active")
        if (actButton.classList.contains("button-desctop")) {
            vw = SIZES.DESCTOP;
        } else if (actButton.classList.contains("button-tablet")) {
            vw = SIZES.TABLET;
        } else {
            vw = SIZES.MOBILE;
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