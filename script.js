let count = 0;

document.querySelector('.img-1').onclick = function () {
    count+= 1;
    document.querySelector('.text-6').innerHTML = count;
    document.querySelector('.img-1').style.display = "none";
    document.querySelector('.line').style.display = "flex";
    alert("Нашёл Яблоко")
}

document.querySelector('.img-2').onclick = function () {
    count+= 1;
    document.querySelector('.text-6').innerHTML = count;
    document.querySelector('.img-2').style.display = "none";
    document.querySelector('.line:nth-child(2)').style.display = "flex";
    alert("Нашёл Листок")
}

document.querySelector('.img-3').onclick = function () {
    count+= 1;
    document.querySelector('.text-6').innerHTML = count;
    document.querySelector('.img-3').style.display = "none";
    document.querySelector('.line:nth-child(3)').style.display = "flex";
    alert("Нашёл Жёлудь")
}

document.querySelector('.img-4').onclick = function () {
    count+= 1;
    document.querySelector('.text-6').innerHTML = count;
    document.querySelector('.img-4').style.display = "none";
    document.querySelector('.line:nth-child(4)').style.display = "flex";
    alert("Нашёл Бабочку")
}
