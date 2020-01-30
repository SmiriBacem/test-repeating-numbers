var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4, 4];
//var arr = [5, 2, 9, 4];

var occurArray = [];

var resultArray = [];

var result = -1;

var filtredArray = arr.filter(function(v , i){
    return arr.indexOf(v)===i;
});
filtredArray.sort();

for(var i=0; i<filtredArray.length; i++){
    var num = filtredArray[i];
    var sum = 0;
    for(var j=0; j<arr.length; j++){
        if(arr[j] === num) {
            sum++;
        }
    }
    occurArray.push(sum);
}
for(var i=0; i<occurArray.length; i++){
   if(occurArray[i]>1){
       resultArray.push(filtredArray[i]);
   }
}

result = resultArray.length>0 ? resultArray.join(" ") : 0;

console.log(filtredArray);
console.log(occurArray);
console.log(result);
