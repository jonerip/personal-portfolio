var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    })
}

function calcRepo() {
    window.open('https://github.com/jonerip/calculator', '_blank');
}

function todoRepo() {
    window.open('https://github.com/jonerip/todo-list', '_blank');
}
