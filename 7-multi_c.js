const args = process.argv.slice(2);

const len = Number(args[0]);
if(isNaN(len)) 
    console.log("Missing number of occurrences");

for (let i = 0; i < len; i++) {
    console.log('C is fun');
}