function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}




document.addEventListener("DOMContentLoaded", function() {
    var changeBtn = document.getElementById("color-btn");
    var colorBox = document.getElementById("color-box");
    console.log(changeBtn)

    changeBtn.addEventListener('click', function() {
        colorBox.style.backgroundColor = randomColor();
    });
});