const size = parseInt(process.argv.slice(2));

if(isNaN(size)) {
    console.log("Missing size");
}
 else {
    let ans = "";
    for(let i = 0; i < size; i++) {
        ans+='X';
    }
for (let i = 0; i < size; i++) {
    console.log(ans);
  }
} 