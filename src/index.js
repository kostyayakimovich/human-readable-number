let objNumber = {
    "0": "",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen",
    "20": "twenty",
    "30": "thirty",
    "40": "forty",
    "50": "fifty",
    "60": "sixty",
    "70": "seventy",
    "80": "eighty",
    "90": "ninety",
    "00": ""
};
module.exports = function toReadable(number) {
    if (typeof number !== "number") return false;
    if (number === 0) return "zero";
    let result;
    let stringNumber = String(number);
    if (number < 21) {
        result = objNumber[stringNumber];
        return result;
    }
    if (number > 20 && number < 100) {
        result =
            objNumber[stringNumber.charAt(0) + "0"] +
            " " +
            objNumber[stringNumber.charAt(1)];
        return result.trim();
    }
    if (number > 99 && stringNumber.charAt(2) !== "0") {
        let firstNamber =
            objNumber[stringNumber.charAt(0)] + " " + "hundred" + " ";
        let secondNumber;
        const num =
            stringNumber.charAt(1) === "0"
                ? stringNumber.charAt(2)
                : stringNumber.charAt(1) + stringNumber.charAt(2);

        if (Number(num) < 21) {
            secondNumber = objNumber[num];
        } else {
            secondNumber =
                objNumber[stringNumber.charAt(1) + "0"] +
                " " +
                objNumber[stringNumber.charAt(2)];
        }
        result = firstNamber + secondNumber;
    } else {
        result =
            objNumber[stringNumber.charAt(0)] +
            " " +
            "hundred" +
            " " +
            objNumber[stringNumber.charAt(1) + "0"];
    }
    return result.trim();
};
