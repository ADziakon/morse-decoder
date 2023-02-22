const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    str1 = "";
str2 = "";
str3 = "";
str = "";
res = "";
res1 = "";
arr = [];
arr2 = [];
arr3 = [];
arrayOfStrings = [];

for (i = 0; i < expr.length; i++) {
  str += expr[i];
  if (str.length == 10) {
    arrayOfStrings.push(str);
    str = "";
  }
}


for (i = 0; i < arrayOfStrings.length; i++) {
  for (j = 0; j < 10; j++) {
    if (arrayOfStrings[i][0] == 0) {
      arrayOfStrings[i] = arrayOfStrings[i].slice(1);
    }
    if (arrayOfStrings[i][0] == 1) {
      break;
    }
  }
}

for (i = 0; i < arrayOfStrings.length; i++) {

str1 = '';
  for (j = 0; j < arrayOfStrings[i].length; j += 2) {

    str2 = arrayOfStrings[i][j] + arrayOfStrings[i][j + 1];
    
    if (str2 == '10'){
        str1 += '.';
        
    }
    if(str2 == '11'){
        str1 += '-';
    }
    str2='';
  }
  arr.push(str1);
}

for(i=0; i<arr.length;i++){
    if(arr[i].length == 0){
        arr3.push(' ');
        continue;
    }
        for (key in MORSE_TABLE){
            if (arr[i] == key){
                arr3.push(Object.values(MORSE_TABLE[key]));
            }
        } 
    
}

    return  arr3.join('');
}

module.exports = {
    decode
}