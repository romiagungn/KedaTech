function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-z]+/g, "");
    return str === str.split("").reverse().join("")
}

console.log(palindrome("AAAAAAAAAAAAAAAAAAAAa"));
console.log(palindrome("AAAAAAAAA aaaaaaaaaaaaaaaaa"));
console.log(palindrome("aaaaaaaaaaaaaaa"));