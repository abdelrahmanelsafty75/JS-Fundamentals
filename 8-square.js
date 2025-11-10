const size = parseInt(process.argv.slice(2));

if(isNaN(size)) {
    console.log("Missing size");
}
 else {
    const ans = 'X'.repeat(size);
    
for (let i = 0; i < size; i++) {
    console.log(ans);
  }
} 