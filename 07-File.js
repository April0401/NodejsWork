var fs = require("fs");

fs.readdir('resource/',function(err, files){
    if(err)
    {
        console.log('目录不存在');
        return;
    }
    console.log(files);
});
    

