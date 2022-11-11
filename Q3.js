//#3
function factorialize(num)
{
  if(num === 0){ //base case
    return 1;
  }
  else{
    return num*factorialize(num-1);
  }
}

console.log(factorialize(5));