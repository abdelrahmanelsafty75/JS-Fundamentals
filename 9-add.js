const args = process.argv.slice(2);

const num1 = parseInt(args[0]);
const num2 = parseInt(args[1]);

// if (isNaN(num1) || isNaN(num2)) {
//     console.log('NaN');
// }
function add(num1,num2){
    return num1 + num2;
}
console.log(add(num1, num2));