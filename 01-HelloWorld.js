var fs = require('fs');

fs.readFile("resource/student.txt",function(err,data){
    if(err)
    {
        console.log("文件读取失败");   
        return;
    }  
    console.log(data.toString());
});

fs.writeFile("resource/teacher.txt","Dava  40",function(err){
    if(err)
    {
        console.log("文件写入失败");
        return;
    }
    console.log("文件写入成功");
});