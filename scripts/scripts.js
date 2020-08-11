const field = document.getElementById('field');

const cellSide = 100;

const emptyCell = {
    top: 0,
    left: 0,
    value: 0,
};

const numbers = [...Array(15).keys()]
    .sort(() => Math.random() - 0.5);

const cells = [];
cells.push(emptyCell);

const victory = () => cells.every(cell => {
    return cell.value === cell.top * 4 + cell.left;
});

const move = index => {
    const cell = cells[index];

    const leftDiff = Math.abs(emptyCell.left - cell.left);
    const topDiff = Math.abs(emptyCell.top - cell.top);

    if (leftDiff + topDiff > 1) return;

    cell.element.style.top = `${emptyCell.top * cellSide}px`;
    cell.element.style.left = `${emptyCell.left * cellSide}px`;

    const emptyLeft = emptyCell.left;
    const emptyTop = emptyCell.top;

    emptyCell.left = cell.left;
    emptyCell.top = cell.top;

    cell.left = emptyLeft;
    cell.top = emptyTop;

    if (victory()) alert('you win!');
};


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

    cell.style.top = `${top * cellSide}px`;
    cell.style.left = `${left * cellSide}px`;

    field.append(cell);

    cell.addEventListener('click', () => {
        move(i);
    })
}
