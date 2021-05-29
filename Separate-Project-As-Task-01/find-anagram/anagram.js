const findAnagram = (input) => {
    const reverseString = reversArry(input.inputOne.toLowerCase());
    //chack both string are equal or not
    if (reverseString == input.inputTwo.toLowerCase()) {
        console.log({ "anagram": true, "description": "Yes... These two words are anagram" });
    } else {
        console.log({ "anagram": false, "description": "No... These two words are not anagram" });
    }
}

const reversArry = (arr) => {
    var ret = new Array;
    var res = "";
    // remove space and insert into array
    const stringArr = Array.from(arr.replace(/ /g, ''));

    // to reverse string array
    for (var i = stringArr.length - 1; i >= 0; i--) {
        //create revers array
        ret.push(stringArr[i]);
        //concatenate string
        res += stringArr[i] + "";
    }
    return res;
}

module.exports = { findAnagram }