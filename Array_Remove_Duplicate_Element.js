let arr = [1, 'a', 'a', 'b', 'd', 'e', 'e', 1, 0, 2, 2, 3];
//The first for loop method
function unique_one(arr){
    let newArr = [arr[0]];
    for(let i = 1; i < arr.length; i++){
          let flag = false;
          for(var j = 0; j < newArr.length; j++){
               if(arr[i] == newArr[j]){
                flag = true;
                break;
               }
          }
          if(!flag){
               newArr.push(arr[i]);
          }
     }
     return newArr;
}

//for loop + New array + New Object
function unique_two(arr){
    let newArr = [];
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj[typeof arr[i] + arr[i]]) {
            obj[typeof arr[i] + arr[i]] = 1;
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//for loop + Sort + New Array
function unique_three(arr){
    arr.sort();
    let newArr = [arr[0]];
     for(let i = 1; i < arr.length; i++){
          if(arr[i] !== newArr[newArr.length - 1]){
               newArr.push(arr[i]);
          }
     }
     return newArr;
}

//forEach + New Array
function unique(arr){
    let newArr = [];
     arr.forEach((item, index, array) => {
        if(array.indexOf(item) === index) {
            newArr.push(item);
        }
    });
     return newArr;
}

//filter + indexOf
function unique(arr){
    return arr.filter((item, index, array) =>  array.indexOf(item) === index);
}

//Map 
function unique(arr){
    const seen = new Map();
    return arr.filter((item) => !seen.has(item) && seen.set(a, 1));
}

//Array from
function unique(arr){
    return Array.from(new Set(arr));
}

//Set
function unique(arr){
    return [...(new Set(arr))];
}

//reduce + includes
function unique(arr){
    return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[]);
}

//regular expression
function distinct(arr) {
  var string = JSON.stringify(arr)
  string = string.replace(/,([^,]+)(?<=\1.*?\1)(?=,|])/g, (m, $1) => $1 == '"' ? m : '')
  return JSON.parse(string)
}

//Other library
jQuery: $.unique
underscore: _.unique
