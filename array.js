/*var arr=[];
console.log(arr);
console.log(typeof arr);
arr[0];
arr[1]=500;
console.log(arr[1]);
var arr=[10,"hello",false,null, undefined,70n,Symbol(100),()=>console.log("Iam a test function"),["Iam a array"]];
console.log(arr);
console.log(arr[7]);
arr[7]();

console.log(arr[0]);
console.log(arr[1]);
*/
var arr=[10,"hello",false,null, undefined,70n,()=>console.log("Iam a test function"),["Iam a array"]];

for(let i=0;i<arr.length; i++)
{
    console.log("i="+ i + " and value = " + arr[i]);
}
