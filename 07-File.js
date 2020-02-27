var fs = require('fs');
var template = require('art-template')
fs.readdir('resource/',function(err, files){
    if(err)
    {
        console.log('目录不存在');
        return;
    }
    console.log(files);
});
    

