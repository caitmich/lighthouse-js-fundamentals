let arr= [];
function range (start, end, step){
for(let i=start; i<=end; i+step){
  arr=arr[i];
}
return arr[i];
}

console.log(range(1, 10, 2));