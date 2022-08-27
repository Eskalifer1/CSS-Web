 myClick = () => {
    name = document.querySelector('.input1').value;
    age = document.querySelector('.input2').value;
    (age > 0) 
        ? alert(`Запит на ім'я ${name} надіслано`)
        : alert("Неможливо зв'язатись із автором")
        document.querySelector('.input1').value = "";
        document.querySelector('.input2').value = "";
}
document.querySelector('.btn').onclick = myClick;
