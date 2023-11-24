function calculate(v1, op, v2) {
    const operations = {
        "+": function (x, y) { return x + y }
    }
    return operations[op](v1, v2);
}

function checkif(v1, op1, v2, options) {
    const operations = {
        "==": function (x, y) { return x == y }
    }
    const isTrue = operations[op1](v1, v2);
    const ret = isTrue ? options.fn(this) : options.inverse(this);
    return ret;
}

function addCommas(x) {
    const number = Number(x);
    if (isNaN(number)) return x;
    const numberWithAddedCommas = number.toLocaleString('en-IN');
    return numberWithAddedCommas;
};


function convertNumberToIndianWords(number) {
    if (isNaN(number) || number < 0 || number > 999999999) return "Invalid input";
    if (number === 0) return "Zero";

    const wordsInEnglish = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
        "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
        "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tensInEnglish = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty",
        "Seventy", "Eighty", "Ninety"];

    function convertLessThanThousand(num) {
        if (num === 0) return "";
        else if (num < 20) return wordsInEnglish[num] + " ";
        else if (num < 100) return tensInEnglish[Math.floor(num / 10)] + " " + convertLessThanThousand(num % 10);
        else return wordsInEnglish[Math.floor(num / 100)] + " Hundred " + convertLessThanThousand(num % 100);
    }

    let result = "";
    const crore = Math.floor(number / 10000000);
    const lakh = Math.floor((number % 10000000) / 100000);
    const thousand = Math.floor((number % 100000) / 1000);
    const remainder = Math.floor(number % 1000);
    const decimal = (Number(number % 1)).toFixed(2);

    if (crore > 0) result += convertLessThanThousand(crore) + "Crore ";
    if (lakh > 0) result += convertLessThanThousand(lakh) + "Lakh ";
    if (thousand > 0) result += convertLessThanThousand(thousand) + "Thousand ";
    if (remainder > 0) result += convertLessThanThousand(remainder);
    result += "Rupees "
    if (decimal) result += `and ${convertLessThanThousand(decimal * 100)} Paise`;

    return result.trim();
}



module.exports = { calculate, checkif, addCommas, convertNumberToIndianWords }