1 sort

var map = new Map();
map.set('2-1', "abc");
map.set('0-1', "sam");
map.set('3-1', "pqr");

var mapDemo = new Map([...map.entries()].sort());

console.log(mapDemo)

2 for

var arr=[5,8,3,6,2,1,0];

var tmp;
for(var i=0;i<arr.length;i++)
{
    for(var j=i+1;j<arr.length;j++)
    {
        if(arr[i] > arr[j])
        {
            tmp=arr[i];
            arr[i]=arr[j];
            arr[j]=tmp;
        }
    }
}
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

arr.forEach(function(){
    console.log("print"+arr);
});

3 foreach

a = [];
a[0] = 300;
a[1] = 600;
a[2] = 100;
a[3] = 200;
a.sort( function( a, b ) { return a - b });
a.forEach( function( val ) { console.log( val ) }); 
