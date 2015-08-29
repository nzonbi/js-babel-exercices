var inputs = process.argv.slice(2);
var result = inputs.map( (word) => word.charAt(0) )
                   .reduce( (val, curr) => val + curr )
console.log(result);
