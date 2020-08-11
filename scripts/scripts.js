const field = document.getElementById('field');
const cellSide = 100;

const empty = {
    top: 0,
    left: 0,
    value: 0,
};

const numbers = [...Array(15).keys()]
    .sort(() => Math.random() - 0.5);

const cells = [];
cells.push(empty);

const victory = cells.every(cell => {
    return cell.value === cell.top * 4 + cell.left;
});
console.log(victory);

const move = index => {
    const cell = cells[index];

    const leftDiff = Math.abs(empty.left - cell.left);
    const topDiff = Math.abs(empty.top - cell.top);

    if (leftDiff + topDiff > 1) return;

    cell.element.style.top = `${empty.top * cellSide}px`;
    cell.element.style.left = `${empty.left * cellSide}px`;

    const emptyLeft = empty.left;
    const emptyTop = empty.top;

    empty.left = cell.left;
    empty.top = cell.top;

    cell.left = emptyLeft;
    cell.top = emptyTop;


    // const victory = cells.every(cell => {
    //     return cell.value === cell.top * 4 + cell.left;
    // });



    if (victory) alert('you von');
};


for (let i = 1; i <= 15; i++) {
    const cell = document.createElement('div');
    // const value = numbers[i - 1] + 1;
    const value = i;
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
