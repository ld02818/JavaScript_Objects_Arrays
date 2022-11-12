console.log("Hello World!\n==========\n");

// Exercise 1 Section
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    let sum = 0;

    arr.forEach((number) => {
        sum += number;
    })
    return sum;
}
console.log(arraySum(numbers));

let favBook = {
    
}
favBook.title = "The Hobbit"
favBook.author = "J.R.R Tolkien"
favBook.pageCount = "295"
favBook.readCount = "3"

console.log(favBook);

favBook.info = function(){
    return `${this.title} by ${this.author} is ${this.pageCount}
    pages and has been read ${this.readCount} times.` ;
};

console.log(favBook.info());


let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence){
    let result = [];
    let words = sentence.split(" ");
    for(let i = 0; i < words.length; i++){
        let letters = words[i].split("")
        letters.reverse();
        let reverseWord = letters.join("");
        result.push(reverseWord);
    }

    return result.join(" ");
}

console.log(reverseWords(sentence));

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(data){

    let headers = data.slice(0, data.indexOf("\n")).split(",");

    let valueList = data.slice(data.indexOf("\n") + 1).split("\n");

    const output = valueList.map((row) => {

        let values = row.split(",");
        let obj = {};

    values.forEach((value, idx) => {
        if(idx < headers.length){
            obj[headers[idx]] = value;
        }else {
            obj[`misc ${idx - headers.length + 1}`] = value;
        }
    });
    return obj;
    });
    return output;
}

console.log(csvConverter(csvData));

