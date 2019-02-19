1 sort

var map = new Map();
map.set('2-1', "abc");
map.set('0-1', "sam");
map.set('3-1', "pqr");

var mapDemo = new Map([...map.entries()].sort());

console.log(mapDemo)

2 for

var input = [2,3,8,1,4,5,9,7,6];

var output = [];
var inserted;

for (var i = 0, ii = input.length ; i < ii ; i++){
  inserted = false;
  for (var j = 0, jj = output.length ; j < jj ; j++){
    if (input[i] < output[j]){
      inserted = true;
      output.splice(j, 0, input[i]);
      break;
    }
  }
  
  if (!inserted)
    output.push(input[i])
}

console.log(output);

3 foreach

a = [];
a[0] = 300;
a[1] = 600;
a[2] = 100;
a[3] = 200;
a.sort( function( a, b ) { return a - b });
a.forEach( function( val ) { console.log( val ) }); 
