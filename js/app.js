// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.SQRT1_2);
// console.log(Math.SQRT2);
// console.log(Math.abs(10));
// console.log(Math.max(30, 64, 2.5, -6.8, 7, 8));
// console.log(Math.min(30, 64, 2.5, -6.8, 7, 8));
// console.log(Math.pow(2, 4)); // **
// console.log(Math.sqrt(121));

// MIN = 10, MAX = 100
// Ultimate formula: Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
// console.log(Math.floor(Math.random() * (100 - 10 + 1)) + 10);
// console.log(Math.random() * 10 + 1); // min = 0, max < 1 ~ 0.99999999999999999

// parseInt

// Math.floor(-3.14);
// Math.ceil(Math.floor(-3.14));
// Math.round(3.14);

//  -5 - -4 -3.14 -3 - -2 - -1 - 0 - 1 - 2 - 3 - 3.44 - 4 - 5

// Conditionals

// if, else if, else

// true bosa ishga tushadi
// if (false) {
//   console.log("if");
//   // if ishga tushmasa, va true bosa ishga turshadi
// } else if (false) {
//   console.log("else if 1");
// } else if (false) {
//   console.log("else if 2");
// } else if (false) {
//   console.log("else if 3");
// } else if (false) {
//   console.log("else if 4");
// } else {
//   // barcha if lar false bosa
//   console.log("else");
// }

// let random = Math.floor(Math.random() * 10 + 1);
// let random = 0;

// if (random === 0) {
//   console.log("Juft ham emas, toq ham emas: ", random);
// }

// if (random % 2 === 0) {
//   console.log("Juft son chiqdi: ", random);
// } else {
//   console.log("Toq son chiqdi: ", random);
// }

// if (random >= 5) {
//   console.log("kotta son chiqdi", random);
// } else {
//   console.log("kichkina son chiqdi", random);
// }

// switch, case, default
let random = 4;
switch (random) {
  case 0: {
    console.log("nol chiqdi");
    break;
  }
  case 1:
  case 2:
  case 3: {
    console.log("yomon");
    break;
  }
  default: {
    console.log("boshqa son chiqdi");
  }
}

if (random === 0) {
  console.log("nol chiqdi");
} else if (random === 1 || random === 2 || random === 3) {
  console.log("yomon");
} else {
  console.log("boshqa son chiqdi");
}

/** Uy ishi(LAR)
 *
 * 1) musbat yoki manfiy
 * 2) juft yoki toq
 * 3) cars, input bor bosa, allaqachon qoshilgan, yoq bosa cars ga qo'shib, qo'shildi sizda ... moshinalar mavjud
 * 4) red, green, blue, grey, yellow, pink, black, white, brown, lime, aqua
 * 5) random hex-decimal color
 * 6) 1 - 10, tori yoki notori
 * 7) ticket = $350, living = $500, picnic = ¢300, $1 = 12200so'm?, ¢1 = 13240so'm?, eshmat xso'm opkeldi, puli yetadimi yoqmi?
 * 8?) Xorazm = 1100km, peshkom = 2km/soat, veli = 20km/soat, moshina = 70km/soat, poyezd = 150km/soat, samalyot = 880km/soat
 *
 */
