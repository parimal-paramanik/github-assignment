
// print all the names except pushpa and tumbad
let arr =["batman", "tumbad", "feluda", "pushpa" , "suzhal", "ratsasan"];


for(let i=0; i<= arr.length-1; i++){
  if (arr[i]=="pushpa" || arr[i]=="tumbad"){
    continue;
  }
  console.log(arr[i]);
}

// let i= 0;
// while()