var fs=require('fs');
fs.readFile('./data.json','utf-8',(err,data)=>{
    console.log(data);
});

var data=require('./data.json');

console.log(data.name);
