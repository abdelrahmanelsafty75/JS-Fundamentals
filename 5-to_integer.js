const args = process.argv.slice(2);

const myNumber = Number(args[0]);

if(isNaN(myNumber)) {
  console.log('Not a number');
} 
else {
  console.log(`My number: ${myNumber}`);
}