const field = document.getElementById('field');

const cellSize = 100;

const empty = {
    top: 0,
    left: 0,
};

const cells = [...Array(15).keys()]
    .map(x => x + 1)
    .sort(() => Math.random() - 0.5);

console.log(cells);

for (let i = 1; i <= 15; i++) {

    const cell = document.createElement('div');
    cell.innerText = cells[i];
    cell.className = 'cell';


    const left = i % 4;
    const top = (i - left) / 4;

    cell.style.top = `${top * cellSize}px`;
    cell.style.left = `${left * cellSize}px`;


    field.append(cell);

    cell.addEventListener('click', () => {
        cell.style.top = `${empty.top * cellSize}px`;
        cell.style.left = `${empty.left * cellSize}px`;
    })
}