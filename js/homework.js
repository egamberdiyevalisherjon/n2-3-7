// let fName = prompt("Ismingizni kiriting: ");
let fName = "Eshmat";

// let year = +prompt("Tug'ilgan yilingizni kiriting: ");
// let month = +prompt("Tug'ilgan oyingizni kiriting: ");
// let day = +prompt("Tug'ilgan kuningizni kiriting: ");
let year = 1991;
let month = 8;
let day = 12;

let bday = new Date(year, month - 1, day).getTime();
let now = Date.now();

let oraliqKunlar = (now - bday) / 1000 / 60 / 60 / 24;

let yil = parseInt(oraliqKunlar / 365.25);
let oy = parseInt((oraliqKunlar % 365.25) / (365.25 / 12));
let kun = parseInt((oraliqKunlar % 365.25) % (365.25 / 12));

console.log(
  "Hurmatli ".concat(
    fName,
    ", siz ",
    yil,
    " yil, ",
    oy,
    " oy, ",
    kun,
    " kun yashabsiz. Umringiz uzoq bo'lsin!"
  )
);
