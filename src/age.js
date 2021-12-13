/*let date = new Date()

let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()

if (month < 10) {
    document.write(`${day}-0${month}-${year}`);
} else {
    document.write(`${day}-${month}-${year}`);
}*/

let t = (new Date()) - (new Date(1998, 2, 15));
t /= (1000 * 60 * 60 * 24 * 365);
document.write(Math.floor(t));