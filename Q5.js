//#5
function largestOfFour(arr)
{
  let output = [];
  let largest;
  
  for(let i = 0; i < arr.length; i++)
  {
    largest = arr[i][0];
    for(let j = 0; j < arr[i].length; j++)
    {
      if(arr[i][j] > largest){
        largest = arr[i][j];
      }
    }
    output[i] = largest;
  } 
  return output;
}