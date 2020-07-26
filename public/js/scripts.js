var btnContainer = document.getElementById("homeButtons");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

function nextH(){
    for (var i = 0; i < btns.length; i++) {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
    }
}

function prevH(){
    for (var i = 0; i < btns.length; i++) {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
    }
}









function changeText() {
    var x = document.getElementById("quote");
    (x.innerHTML === "How can less be more? More is more!") ? x.innerHTML = "Nem copy-paste sabem fazer..." : x.innerHTML = "How can less be more? More is more!";  
}   

function changeAutor(){
    var x = document.getElementById("autor");
    (x.innerHTML === "- Yngwie Malmsteen") ? x.innerHTML = "- Fábien Jesuis" : x.innerHTML = "- Yngwie Malmsteen";
}

function change(){
    changeText();
    changeAutor();
}