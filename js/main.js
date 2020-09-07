let button = document.getElementById('add');
let paragraph = document.getElementById('paragraph');
let removeButton = document.getElementById('remove')

button.onclick = function () {
    paragraph.innerText = 'To jest przykładowy tekst';
}
console.log(button);
console.log(paragraph);

function removeText() {
    console.log('funkcja remove text');
    paragraph.innerText = "";
}

removeButton.onclick = removeText;

