let btn = document.getElementById("btn");
let h1 = document.getElementById("h1");
btn.addEventListener("click", () => {
    if (h1.innerHTML == "") {

        h1.innerHTML = "Hello, World!";
    }else{
        h1.innerHTML = "";
    }
})