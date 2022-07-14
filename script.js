const board = document.querySelector('#board');
const square_number = 399;
const colors = ['#FF0000', '#BF3030', '#67E667', '#5CCCCC', '#FFB273', '#39E639', '#FF9640'];


for (let i = 0; i < square_number; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setcolor(square));
    square.addEventListener('mouseleave', () => removecolor(square));
    board.append(square);
}


function setcolor(element) {
    const color = Getrandomcolor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 10px ${color},0 0 10px ${color} `;
}


function removecolor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000 `;
}


function Getrandomcolor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}