const field = document.getElementById('field');

const range = (start, stop, step) => Array.from({length: (stop - start) / step + 1}, (_, i) => start + (i * step));

const cellSize = 100;

const empty = {
    top: 0,
    left: 0,
    value: 0,
};

const cells = [];
cells.push(empty);

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

};

for (let i = 1; i <= 15; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerHTML = i;

    const left = i % 4;
    const top = (i - left) / 4;

    cells.push({
        left: left,
        top: top,
        element: cell,
    });

    cell.style.top = `${top * cellSize}px`;
    cell.style.left = `${left * cellSize}px`;

    field.append(cell);

    cell.addEventListener('click', () => {
        move(i)
    })
}