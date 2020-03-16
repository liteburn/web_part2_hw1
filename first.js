function toArr(obj){
    var lst = Object.keys(obj);
    var new_arr = [];
    for (i = 0; i < lst.length; i++){
        new_arr.push([lst[i], obj[lst[i]]])
    }
    console.log(new_arr);
    return new_arr;
}

function avgWordLengthCalc(str){
    var space = 0;
    var chr = 0;
    for(i = 0; i < str.length; i++){
        if(str[i] === ' '){
            space += 1
        }
        if(str[i].toLowerCase() !== str[i].toUpperCase()){
            chr += 1;
        }
    }
    console.log(Math.round(chr/(space + 1) * 100)/100);
    return Math.round(chr/(space + 1) * 100)/100;
}

function maxTotal(arr) {
    let new_arr = [];

    for (i = 0; i < arr.length; i++){

        if (new_arr.length < 5){

            new_arr.push(parseInt(arr[i]));
        }
        else{
            var mn = Math.min(...new_arr);
            if (mn < arr[i]){
                new_arr[new_arr.indexOf(mn)] = parseInt(arr[i]);
            }
        }
    }
    var sm = 0;
    for (i = 0; i < 5; i++){
        sm += new_arr[i];
    }
    console.log(sm);
    return sm;
}

function pentagonalNumber(num) {
    console.log((3*(num*num) - num)/2);
    return (3*(num*num) - num)/2;
}

// toArr({ key1: 'value1', key2: 'value2' });
// toArr({});
//
// avgWordLengthCalc("q w e r t y."); // 1.00
// avgWordLengthCalc("The reduce method executes a reducer function."); // 5.57
// avgWordLengthCalc("callback is called, accumulator!"); // 6.75
// avgWordLengthCalc(""); // 0
//
// maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]); // 43
// maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]);   // 100
// maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);    // 40
//
// pentagonalNumber(1); // 1
// pentagonalNumber(2);// 5
// pentagonalNumber(5); // 35
// pentagonalNumber(9); // 117