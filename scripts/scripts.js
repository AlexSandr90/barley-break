const field = document.getElementById('field');

const cellSide = 100;

const emptyCell = {
    top: 0,
    left: 0,
    value: 0,
};

const randomCellNumbers = [...Array(15).keys()]
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

    cell.fieldElement.style.top = `${emptyCell.top * cellSide}px`;
    cell.fieldElement.style.left = `${emptyCell.left * cellSide}px`;

    const temporaryLeft = emptyCell.left;
    const temporaryTop = emptyCell.top;

    emptyCell.left = cell.left;
    emptyCell.top = cell.top;

    cell.left = temporaryLeft;
    cell.top = temporaryTop;

    if (victory()) alert('you win!');
};

for (let i = 1; i <= 15; i++) {
    const cell = document.createElement('div');
    const cellValue = randomCellNumbers[i - 1] + 1;
    cell.className = 'cell';
    cell.innerText = cellValue;

    const cellLeft = i % 4;
    const cellTop = (i - cellLeft) / 4;

    cells.push({
        top: cellTop,
        left: cellLeft,
        value: cellValue,
        fieldElement: cell,
    });

    cell.style.top = `${cellTop * cellSide}px`;
    cell.style.left = `${cellLeft * cellSide}px`;

    field.append(cell);

    cell.addEventListener('click', () => {
        move(i);
    })
}
