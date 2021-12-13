const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const d = new Date();
let name = month[d.getMonth()];
document.write(Math.floor(name - 3));