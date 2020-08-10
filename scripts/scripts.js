const field = document.getElementById('field');
const cellSize = 100;

const empty = {
    top: 0,
    left: 0,
    value: 0,
};

const numbers = [...Array(15).keys()]
    .sort(() => Math.random() - 0.5);

console.log(numbers);

const cells = [];
cells.push(empty);
console.log(cells);

const move = index => {
    const cell = cells[index];

    const leftDiff = Math.abs(empty.left - cell.left);
    const topDiff = Math.abs(empty.top - cell.top);


    if (leftDiff + topDiff > 1) return;


    cell.element.style.top = `${empty.top * cellSize}px`;
    cell.element.style.left = `${empty.left * cellSize}px`;

    const emptyLeft = empty.left;
    const emptyTop = empty.top;

    empty.left = cell.left;
    empty.top = cell.top;

    cell.left = emptyLeft;
    cell.top = emptyTop;


    const isVictory = cells.every(cell => {
        return cell.value === cell.top * 4 + cell.left;
    });

    if (isVictory) alert('you von');
};
console.log(cells);


for (let i = 1; i <= 15; i++) {
    const cell = document.createElement('div');
    const value = numbers[i - 1] + 1;
    cell.className = 'cell';
    cell.innerHTML = value;

    const left = i % 4;
    const top = (i - left) / 4;

    cells.push({
        top: top,
        left: left,
        value: value,
        element: cell,
    });



    cell.style.top = `${top * cellSize}px`;
    cell.style.left = `${left * cellSize}px`;


    field.append(cell);

    cell.addEventListener('click', () => {
        move(i);
    })
}
