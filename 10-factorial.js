const num = parseInt(process.argv[2]); // = process.argv.slice(2)[0];

if(isNaN(num)) console.log(1);
else{
    function factorial(num){
        if(num === 0 || num === 1) return 1;
        return num * factorial(num - 1);
    }
    console.log(factorial(num));
}