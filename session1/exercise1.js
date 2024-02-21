// Number 1
// Write a code to find area of rectangle.
// Example : length = 5, width = 3 → 15

// Formula Area Rectangle -> length*width
const rectangleLength = 5;
const rectangleWidth = 3;

const rectangleArea = rectangleLength * rectangleWidth;
console.log(`Luas dari Persegi Panjang adalah ${rectangleArea}`);
console.log("===================================================================================");

// Number 2
// Write a code to find perimeter of rectangle.
// Example : length = 5, width = 3 → 16

// Formula Perimeter Rectangle -> 2*(length+width)
const rectanglePerimeter = 2 * (rectangleLength + rectangleWidth);
console.log(`Keliling dari Persegi Panjang adalah ${rectanglePerimeter}`);
console.log("===================================================================================");

// Number 3
// Write a code to find diameter, circumference and area of a circle.
// Example : radius = 5
// Output : diameter = 10, circumference = 31.4159, area = 78.539

// Formula Diameter Circle -> 2*r
// Formula Circumference Circle -> 2*Pi*r or Pi*diameter
// Formula Area Circle -> Pi*r*r
const r = 5; //radius = 5

const circleDiameter = 2 * r;
const circleCircumference = Math.PI * circleDiameter;
const cicrleArea = Math.PI * r * r;
console.log(`Diameter Lingkaran = ${circleDiameter}, Keliling Lingkaran = ${circleCircumference}, Luas Lingkaran = ${cicrleArea}`);
console.log("===================================================================================");

// Number 4
// Write a code to find angles of triangle if two angles are given.
// Example : a = 80, b = 65 → 35

// Formula: 180 - angle a - angle b
const a = 80; //First angle
const b = 65; //Second angle

const c = 180 - (a + b); //Third angle
console.log(`Hasil dari sudut ketiga (c) adalah ${c}`);
console.log("===================================================================================");

// Number 5
// Write a code to get difference between dates in days.
// Example : date1 = 2022-01-20, date2 = 2022-01-22 → 2
const date1 = new Date("2022-01-20");
const date2 = new Date("2022-01-22");

const differenceResult = (date2 - date1) / (1000 * 3600 * 24);
console.log(`Selisih dari tanggal tersebut adalah ${differenceResult} hari`);
console.log("===================================================================================");

// Number 6
// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// Example : 400 days → 1 year, 1 month, 5 days
// Example: 366 days → 1 year, 0 month, 1 day

// Define conversion factors
const daysInYear = 365; //1 year : 365 days
const daysInMonth = 30; //1 month : 30 days

const totalDays = 400;
const years = Math.floor(totalDays / daysInYear); //Calculate years
const remainingDaysAfterYears = totalDays % daysInYear; //Calculate remaining days after considering years
const months = Math.floor(remainingDaysAfterYears / daysInMonth); //Calculate months
const remainingDays = remainingDaysAfterYears % daysInMonth; //Calculate remaining days after considering years and months
console.log(`${totalDays} hari kira-kira ${years} tahun, ${months} bulan, ${remainingDays} hari`);