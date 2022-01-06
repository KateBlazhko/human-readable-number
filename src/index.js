let firstDecade = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let secondDecade = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let allDecade = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number) {
  return (number < 10) ? firstDecade[number] :
         (number < 100) ? checkDoubleFigure(number) : checkThreeFigure(number);
}

const checkDoubleFigure = function (number) {
  let numberDecada = Math.trunc(number / 10);
  let numberLast = number % 10;

  return (numberDecada === 1) ? secondDecade[numberLast] :
         (numberLast === 0) ? allDecade[numberDecada] :
         allDecade[numberDecada] + ' ' + firstDecade[numberLast];

}

const checkThreeFigure = function (number) {
  let numberHundred = Math.trunc(number / 100);
  let numberDecada = (Math.trunc(number / 10)) % 10;
  let numberLast = number % 10;

  return ((numberLast === 0) && (numberDecada === 0)) ? (firstDecade[numberHundred]  + ' hundred') :
         (numberDecada === 0) ? (firstDecade[numberHundred] + ' hundred ' + firstDecade[numberLast]) :
         (numberDecada === 1) ? (firstDecade[numberHundred] + ' hundred ' + secondDecade[numberLast]) :
         (numberLast === 0) ? (firstDecade[numberHundred] + ' hundred ' + allDecade[numberDecada]) :
         (firstDecade[numberHundred] + ' hundred ' + allDecade[numberDecada] + ' ' + firstDecade[numberLast])
}