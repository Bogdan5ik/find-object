document.querySelector('.img-1').onclick = function () {
    document.querySelector('.img-1').style.display = "none";
    document.querySelector('.img-2').style.display = "flex";
    document.querySelector('.text-6').innerHTML = "1";
    document.querySelector('.line').style.display = "flex";
    console.log("Нашёл Яблоко")
}

document.querySelector('.img-2').onclick = function () {
    document.querySelector('.img-2').style.display = "none";
    document.querySelector('.img-3').style.display = "flex";
    document.querySelector('.text-6').innerHTML = "2";
    document.querySelector('.line:nth-child(2)').style.display = "flex";
    console.log("Нашёл Листок")
}

document.querySelector('.img-3').onclick = function () {
    document.querySelector('.img-3').style.display = "none";
    document.querySelector('.img-4').style.display = "flex";
    document.querySelector('.text-6').innerHTML = "3";
    document.querySelector('.line:nth-child(3)').style.display = "flex";
    console.log("Нашёл Жёлудь")
}

document.querySelector('.img-4').onclick = function () {
    document.querySelector('.img-4').style.display = "none";
    document.querySelector('.img-4').style.display = "none";
    document.querySelector('.text-6').innerHTML = "4";
    document.querySelector('.line:nth-child(4)').style.display = "flex";
    console.log("by Bogdan5ik")
}