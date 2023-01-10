module.exports = function toReadable(number) {
    const firstNumber = number % 10;
    const secondNumber = (number % 100);
    const thirdNumber = number % 1000;

    const firstDigits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const secondDigits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let result = '';

    if (number === 0) { return (result = 'zero'); }
    // from 1 to 9
    if (firstNumber < 10 && firstNumber !== 0) {
        for (let num of firstDigits) {
            if (num === firstDigits[firstNumber - 1]) {
                result = `${num}`;
            }
        }
        if (number < 10) { return result.trim(); }
    }
    // from 10 to 19
    if (secondNumber >= 10 && secondNumber < 20) {
        for (let num of secondDigits) {
            if (num === secondDigits[firstNumber]) {
                result = `${num}`;
            }
        }
        if (number < 20) { return result.trim(); }
    }
    // from 20 to 99
    if (secondNumber >= 20 && secondNumber < 100) {
        for (let ten of tens) {
            // console.log(ten)
            if (ten === tens[(secondNumber - firstNumber) / 10 - 2]) {
                result = `${tens[(secondNumber - firstNumber) / 10 - 2]} ${result}`;
            }
        }
        if (number < 100) { return result.trim(); }
    }
    // from 100 to 999
    if (thirdNumber >= 100 && thirdNumber < 1000) {
        for (let num of firstDigits) {
            if (num === firstDigits[(thirdNumber - secondNumber) / 100 - 1]) {
                result = `${num} hundred ${result}`;
                return result.trim();
            }
        }
    }
    return result.trim();
};
