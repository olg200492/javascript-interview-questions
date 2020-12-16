
let arr = [1,2,2,4,5,6,7,8,10];

function findMissingNumber(arr){
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]+1!==arr[i+1]){
      return arr[i]+1;
    }
  }
  return false;
}

function checkForDuplicates(arr){
  let v =[];
  arr.map(item=>{
    if(v.indexOf(item) !== -1){
      console.log(item);
      return true;
    }
    v.push(item);
  })
  return false;
}

function checkForDuplicates1(array) {
  return new Set(array).size !== array.length
}

function findMinMax(arr){
  return {
    Min:Math.min(...arr),
    Max:Math.max(...arr)
    };
}

//console.log(findMinMax(arr));

//checkForDuplicates(arr);

//console.log(findMissingNumber(arr))

function cumulativeSum(arr){
  let sum = [arr[0]];

  for(let i=1;i<arr.length;i++){
    sum.push(arr[i]+sum[i-1]);
  }
  return sum;
}

function findDup(arr){
  let a=[];
  let repeats = new Map()
  for(let i=0;i<arr.length;i++){
    let index = arr.indexOf(arr[i]);
    if(arr.slice(index+1).indexOf(arr[i])!==-1&&repeats.has(arr[i])===false){
      a.push(arr[i]);
      repeats.set(arr[i],true);
    }
  }
  return a;
}

function rd(arr){
  return Array.from(new Set(arr));
}

//console.log(rd([1,1,2,2]));

function removeDup(arr){
  let newArr=[];
  let pr = arr[0];
  newArr[0] = pr;
  arr.sort((a,b)=>{
    return a-b;
  });
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==pr){
      newArr.push(arr[i]);
    }
    pr = arr[i];
  }
  return newArr;
}


console.log(removeDup([1,1,1,5]));
