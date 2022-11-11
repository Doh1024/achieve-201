//#6
function confirmEnding(str,target)
{
  return str.endsWith(target);
}
//or i can prob split and compare last index to target
console.log(confirmEnding("bastian", "h"));